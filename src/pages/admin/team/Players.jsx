import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useCallback, useState } from 'react'
import DeletePlayer from './DeletePlayer';
import { toastError, toastSuccess } from '../../../helpers/Toast';
import AddPlayer from './AddPlayer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam, removedPlayer } from '../../../app/features/team/teamAction';
import Loading from '../../../helpers/Loading';

const Players = ({ teamTitle, teamId }) => {
  const { userInfo } = useSelector((state) => state.user)
  const { loading, error } = useSelector((state) => state.teams)
  const dispatch = useDispatch()
  let [players, setPlayers] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(async () => {
    setIsOpen(true);
    try {
      const { payload } = await dispatch(fetchTeam(teamTitle))
      setPlayers(payload.team[0].players)
    } catch (error) {
      toastError(error.message);
    }
  }, [dispatch, teamTitle]);

  function closeModal() {
    setIsOpen(false);
  }

  const removePlayer = async (teamId, playerId) => {
    if (userInfo?.role === "admin") {
      try {
        const { meta } = await dispatch(removedPlayer({ teamId, playerId }))
        if (meta.requestStatus === "fulfilled") {
          toastSuccess('player deleted successfully')
        }
      } catch (err) {
        toastError(err.message);
      }
    } else toastError('you dont have permission')
  };

  if (loading) return <Loading />
  if (error) return toastError(error.message)
  return (
    <>
      <button className="flex justify-around items-center w-full bg-blue-500 py-3" onClick={openModal}>
        Players
        <i className="fa fa-gamepad"></i>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl shadow-xred transition-all">
                  <div className="mb-4">
                    <button
                      type="button"
                      className="rounded-md border fa fa-window-close block my-3 bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 outline-none"
                      onClick={closeModal}
                    ></button>
                    <AddPlayer teamId={teamId} />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white font-main"
                  >
                    see players here !
                  </Dialog.Title>
                  {players.map(player => (
                    <div key={player?._id} className="flex justify-around items-center my-2 py-2 rounded-sm border border-xred text-white">
                      <p className=' p-2'>{player?.name}</p>
                      <DeletePlayer deleted={() => removePlayer(teamId, player?._id)} />
                    </div>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Players