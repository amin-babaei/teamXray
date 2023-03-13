import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewTeam } from '../../../app/features/team/teamAction';
import { toastError, toastSuccess } from '../../../helpers/Toast';

const AddTeam = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.user)
  const [name, setName] = useState('');
  const dispatch = useDispatch()

  const closeModal = () => {
    setIsOpen(false);
  }
  const openModal = () => {
    setIsOpen(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userInfo?.role === "admin") {
      let data = new FormData();
      data.append("name", name.split(" ").join("-"));
      data.append("banner", event.target.banner.files[0]);

      const { meta } = await dispatch(addNewTeam(data))
      if (meta.requestStatus === "fulfilled") {
        toastSuccess('team created !')
        setName('')
        setIsOpen(false)
      }
    } else toastError('you dont have permission')
  };
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 outline-none"
      >
        Add team +
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
                      className="rounded-md border fa fa-window-close bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 outline-none"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white font-main"
                  >
                    add team here !
                  </Dialog.Title>

                  <form
                    className="flex flex-col h-80 my-5 justify-around bg-black text-white"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm"
                      placeholder="name"
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />

                    <input type="file" name="banner" />

                    <button className="btn mt-5">submit</button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddTeam