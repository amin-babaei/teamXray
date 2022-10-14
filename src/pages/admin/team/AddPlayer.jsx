import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { newplayer } from "../../../services/team";
import { toastError, toastSuccess } from "../../../helpers/Toast";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddPlayer = ({ teamId }) => {
  let [isOpen, setIsOpen] = useState(false);
  const {userInfo} = useSelector((state) => state.user)
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const initialState = {
    name: "",
    game: "",
    youtube: "",
    twitch: "",
    instagram: "",
    twitter: "",
  };
  const [player, setPlayer] = useState(initialState);
  const { name, game, youtube, instagram, twitch, twitter } = player;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(userInfo?.role==="admin"){
      try {
        let data = new FormData();
        data.append("name", name);
        data.append("game", game);
        data.append("youtube", youtube);
        data.append("twitch", twitch);
        data.append("instagram", instagram);
        data.append("twitter", twitter);
        data.append("image", event.target.image.files[0]);
  
        const { status } = await newplayer(teamId, data);
        if (status === 201) {
          toastSuccess("player added successfully");
          Navigate("/admin/team");
        }
      } catch (ex) {
        console.log(ex);
      }
    }
    toastError('you dont have permission')
  };
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 outline-none"
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
                <Dialog.Panel className="w-full h-[40rem] max-w-lg transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl shadow-xred transition-all">
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
                    className="flex flex-col my-5 justify-between bg-black text-white"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm my-2"
                      placeholder="name"
                      name="name"
                      value={name}
                      onChange={handleChangeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm my-2"
                      placeholder="game"
                      name="game"
                      value={game}
                      onChange={handleChangeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm my-2"
                      placeholder="youtube"
                      name="youtube"
                      value={youtube}
                      onChange={handleChangeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm my-2"
                      placeholder="twitch"
                      name="twitch"
                      value={twitch}
                      onChange={handleChangeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm my-2"
                      placeholder="instagram"
                      name="instagram"
                      value={instagram}
                      onChange={handleChangeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm my-2"
                      placeholder="twitter"
                      name="twitter"
                      value={twitter}
                      onChange={handleChangeInput}
                    />
                    <input type="file" name="image" className="mt-2" />
                    <button className="btn my-5">submit</button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddPlayer;
