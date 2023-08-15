import { Dialog, Transition } from "@headlessui/react";
import { Fragment, memo, useState } from "react";

const AddPlayer = memo(({ player, changeInput, addPlayer, deletePlayer, handleImagePlayer,submittedPlayer }) => {
  const { name, game, youtube, instagram, twitch, twitter } = player;
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 outline-none mt-5 mx-auto"
      >
        Add player +
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
                <Dialog.Panel className="w-full h-[40rem] max-w-lg transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-lg shadow-xred transition-all">
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
                    add player here !
                  </Dialog.Title>

                  <form
                    className="flex flex-col my-5 justify-between bg-black text-white gap-5"
                  // onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm"
                      placeholder="name"
                      name="name"
                      value={name}
                      onChange={changeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm"
                      placeholder="game"
                      name="game"
                      value={game}
                      onChange={changeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm"
                      placeholder="youtube"
                      name="youtube"
                      value={youtube}
                      onChange={changeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm"
                      placeholder="twitch"
                      name="twitch"
                      value={twitch}
                      onChange={changeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm"
                      placeholder="instagram"
                      name="instagram"
                      value={instagram}
                      onChange={changeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm"
                      placeholder="twitter"
                      name="twitter"
                      value={twitter}
                      onChange={changeInput}
                    />
                    <input type="file" name="image" className='text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-3 text-sm' onChange={e => handleImagePlayer(e.target.files[0])}/>
                    <button type="button" className="btn font-bold" onClick={addPlayer}>Add player</button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {submittedPlayer?.map((player,index) => (
        <div key={player.playerName || player.name} className="flex items-center justify-between px-2 my-3 rounded shadow-md shadow-xred w-2/3 md:w-1/3 mx-auto">
          <h3>{player.playerName || player.name}</h3>
          <button className="flex justify-around items-center text-red-500 py-3" onClick={() => deletePlayer(index)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </>
  );
});

export default AddPlayer;