import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toastError, toastSuccess } from '../../../helpers/Toast';
import { useSelector } from "react-redux";
import { useAddNewBlogMutation } from "../../../app/features/blogSlice";
import Loading from "../../../helpers/Loading";

const AddBlog = () => {
  const { userInfo } = useSelector((state) => state.user)
  const [addNewBlog, { isLoading, isSuccess }] = useAddNewBlogMutation();

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  }
  const openModal = () => {
    setIsOpen(true);
  }
  const initialState = {
    title: "",
    description: "",
    body: "",
  }
  const [blog, setBlog] = useState(initialState);
  const { title, description, body } = blog;

  const handleChangeInput = e => {
    const { name, value } = e.target
    setBlog({ ...blog, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userInfo?.role === "admin") {

      let data = new FormData();
      data.append("title", title.split(" ").join("-"));
      data.append("description", description);
      data.append("body", body);
      data.append("imageUrl", event.target.imageUrl.files[0]);

      await addNewBlog(JSON.stringify(data))

    } else toastError('you dont have permission')
  };
  if (isLoading) return <Loading />
  if (isSuccess) {
    toastSuccess("Blog added successfully");
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 outline-none"
      >
        Add blog +
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
                    add blog here !
                  </Dialog.Title>

                  <form
                    className="flex flex-col h-80 my-5 justify-between bg-black text-white"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm mb-5"
                      placeholder="title"
                      name="title"
                      value={title}
                      onChange={handleChangeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm"
                      placeholder="description"
                      name="description"
                      value={description}
                      onChange={handleChangeInput}
                    />
                    <textarea
                      name="body"
                      value={body}
                      onChange={handleChangeInput}
                      className="resize-none p-2 rounded-md my-5 w-full h-32 bg-black border outline-none focus:border-xred"
                      placeholder="type body blog here"
                    ></textarea>

                    <input type="file" name="imageUrl" />

                    <button className="btn mt-5">submit</button>
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
export default AddBlog;
