import { Fragment, useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toastError, toastSuccess } from '../../../helpers/Toast';
import { useEditBlogMutation, useGetBlogQuery } from '../../../app/features/blogSlice';
import Loading from '../../../helpers/Loading';

const EditBlog = ({ blogTitle }) => {
  const { userInfo } = useSelector((state) => state.user)
  const { data } = useGetBlogQuery(blogTitle);
  const [updateBlog, { isLoading: editLoading, isSuccess }] = useEditBlogMutation();

  const [state, setState] = useState({
    blog: {
      title: "",
      description: "",
      body: "",
      imageUrl: "",
    }
  });
  const { blog } = state;
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setState({ ...state, blog: data?.blog[0] });
  }, [data?.blog])

  const handleChangeInput = e => {
    const { name, value } = e.target
    setState({ ...state, blog: { ...state.blog, [name]: value } })
  }

  const handleChangeFile = e => {
    const { files } = e.currentTarget
    setState({ ...state, blog: { ...state.blog, imageUrl: files[0] } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userInfo?.role === "admin") {
      let data = new FormData()
      data.append("title", blog.title.split(" ").join("-"))
      data.append('description', blog.description)
      data.append('body', blog.body)
      data.append('imageUrl', blog.imageUrl)

      await updateBlog(JSON.stringify(data))
    } else toastError('you dont have permission')
  }
  if (editLoading) return <Loading />
  if (isSuccess) {
    toastSuccess("Blog updated successfully")
  }
  return (
    <>
      <button className="flex justify-around items-center w-full bg-yellow-500 py-3" onClick={openModal}>
        Edit
        <i className="fas fa-edit"></i>
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
                      value={blog?.title}
                      onChange={handleChangeInput}
                    />
                    <input
                      type="text"
                      className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm"
                      placeholder="description"
                      name="description"
                      value={blog?.description}
                      onChange={handleChangeInput}
                    />
                    <textarea
                      name="body"
                      onChange={handleChangeInput}
                      value={blog?.body}
                      className="resize-none p-2 rounded-md my-5 w-full h-32 bg-black border outline-none focus:border-xred"
                      placeholder="type body blog here"
                    ></textarea>

                    <input type="file" name="imageUrl" onChange={handleChangeFile} />

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

export default EditBlog