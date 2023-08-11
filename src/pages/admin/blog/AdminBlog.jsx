import DeleteBlog from './DeleteBlog';
import { toastError, toastSuccess } from '../../../helpers/Toast';
import Loading from '../../../helpers/Loading';
import { Helmet } from 'react-helmet-async';
import { useDeleteBlogMutation, useGetBlogListQuery } from '../../../app/features/blogSlice';
import { Link } from 'react-router-dom';

const AdminBlog = () => {
  const { data, isLoading } = useGetBlogListQuery()
  const [deleteBlog, { isLoading: delLoading, isSuccess }] = useDeleteBlogMutation();

  const deletedBlog = async (blogId) => {
    try {
      await deleteBlog(blogId)
    } catch (error) {
      toastError(error?.message)
    }
  };

  if (delLoading) return <Loading />
  if (isSuccess) {
    toastSuccess("Blog deleted successfully");
  }

  return (
    <div className="containerr py-10 min-h-screen">
      <Helmet>
        <title>Admin-Blogs</title>
      </Helmet>
      <Link to={`/admin/blog/create`}>
        <button type="button" className="rounded-md bg-xred px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 outline-none">
          Add blog +
        </button>
      </Link>
      <section className='my-5'>
        {isLoading && <Loading />}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {data?.Blogs.map(blog => (
            <div key={blog._id}>
              <img src={`${process.env.REACT_APP_BASE_URL}/${blog.imageUrl}`} alt={blog.title} className="h-64" />
              <div className='flex justify-between'>
                <Link to={`/admin/blog/${blog.title}`} className='flex-grow'>
                  <button className="flex justify-around items-center w-full bg-yellow-500 py-3">
                    Edit
                    <i className="fas fa-edit"></i>
                  </button>
                </Link>
                <DeleteBlog deleted={() => deletedBlog(blog._id)} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminBlog;