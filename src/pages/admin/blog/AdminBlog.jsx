import AddBlog from './AddBlog';
import DeleteBlog from './DeleteBlog';
import EditBlog from './EditBlog';
import { toastError, toastSuccess } from '../../../helpers/Toast';
import Loading from '../../../helpers/Loading';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useDeleteBlogMutation, useGetBlogListQuery } from '../../../app/features/blogSlice';

const AdminBlog = () => {
  const { userInfo } = useSelector((state) => state.user)
  const { data, isLoading } = useGetBlogListQuery()
  const [deleteBlog, { isLoading: delLoading, isSuccess }] = useDeleteBlogMutation();

  const deletedBlog = async (blogId) => {
    if (userInfo?.role === "admin") {
      await deleteBlog(blogId)

    } else toastError('you dont have permission')
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
      <AddBlog />
      <section className='my-5'>
        {isLoading && <Loading />}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {data?.Blogs.map(blog => (
            <div key={blog._id}>
              <img src={`${process.env.REACT_APP_BASE_URL}/${blog.imageUrl}`} alt={blog.title} className="h-64" />
              <div className='flex justify-between'>
                <EditBlog blogTitle={blog.title} blogId={blog._id} />
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
