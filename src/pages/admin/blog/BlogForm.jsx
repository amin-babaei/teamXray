import { useState, useEffect } from 'react';
import { toastError, toastSuccess } from '../../../helpers/Toast';
import { useAddNewBlogMutation, useEditBlogMutation, useGetBlogQuery } from '../../../app/features/blogSlice';
import Loading from '../../../helpers/Loading';
import { Link, useLocation, useParams } from 'react-router-dom';
import Editor from './Editor';

const BlogForm = () => {
  const { title } = useParams();
  const { pathname } = useLocation();
  const { data, isLoading: blogLoading } = useGetBlogQuery(title, { skip: !pathname.includes(title)});
  const [addNewBlog, { isLoading: saveLoading, isSuccess: saveSuccess }] = useAddNewBlogMutation();
  const [updateBlog, { isLoading: editLoading, isSuccess: editSuccess }] = useEditBlogMutation();

  const [blog, setBlog] = useState({
    title: '',
    description: '',
    body: '',
    imageUrl: '',
    previewImageUrl: '',
  });

  useEffect(() => {
    if (data && data.blog && data.blog.length > 0 && pathname !== "/admin/blog/create") {
      const { title, description, body, imageUrl } = data.blog[0];
      setBlog({ title, description, body, imageUrl, previewImageUrl: imageUrl });
    }
  }, [data, pathname]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleChangeFile = (e) => {
    const { files } = e.target;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setBlog((prevBlog) => ({
        ...prevBlog,
        imageUrl: file,
        previewImageUrl: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleBodyChange = (value) => {
    setBlog((prevBlog) => ({ ...prevBlog, body: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { previewImageUrl, ...blogData } = blog;

    let formData = new FormData();
    formData.append('title', blogData.title.split(' ').join('-'));
    formData.append('description', blogData.description);
    formData.append('body', blogData.body);
    formData.append('imageUrl', blogData.imageUrl);
    try {
      if (pathname === '/admin/blog/create') {
        addNewBlog(formData);
      } else {
        await updateBlog({ id: data.blog[0]._id, ...blogData, imageUrl: formData.get('imageUrl') }).unwrap();
      }
    } catch (error) {
      toastError(error?.data?.message)
    }
  };

  if ((blogLoading && pathname.includes(title)) || saveLoading || editLoading) return <Loading />;
  if (editSuccess) {
    toastSuccess('Blog updated successfully');
  }
  if (saveSuccess) {
    toastSuccess('Blog created successfully');
  }

  const renderPreviewImage = () => {
    if (!blog.previewImageUrl) return null;
    const isDataUrl = blog.previewImageUrl.startsWith('data:');

    const imageUrl = isDataUrl
      ? blog.previewImageUrl
      : `${process.env.REACT_APP_BASE_URL}/${blog.previewImageUrl}`;

    return (
      <img src={imageUrl} alt="Preview" className="max-w-lg h-40 mx-auto" />
    );
  };

  return (
    <>
      <Link to='/admin/blog'>
          <button className="fas fa-arrow-left w-10 h-10 rounded transition-colors duration-300 text-white text-lg ml-5 sm:ml-20 mt-10 shadow-md shadow-xred hover:bg-xred"></button>
      </Link>
      <form className="flex flex-col mb-5 mt-10 justify-between bg-black text-white px-5">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={blog.title}
          onChange={handleChangeInput}
          className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred font-bold border-none outline-none rounded-md w-full p-4 text-sm mb-5 sm:w-2/3 sm:mx-auto"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={blog.description}
          onChange={handleChangeInput}
          className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred font-bold border-none outline-none rounded-md w-full p-4 text-sm mb-5 sm:w-2/3 sm:mx-auto"
        />
        <Editor body={blog.body} BodyChange={handleBodyChange} />
        <input
          type="file"
          name="imageUrl"
          onChange={handleChangeFile}
          className="text-white bg-black placeholder-gray-300 shadow-md shadow-xred border-none outline-none rounded-md w-full px-4 py-2 text-sm mb-5 sm:w-2/3 sm:mx-auto"
        />
        {renderPreviewImage()}
        <button className="btn mt-5 uppercase font-bold w-1/4 mx-auto" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default BlogForm;