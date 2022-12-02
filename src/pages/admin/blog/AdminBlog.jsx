import {useEffect} from 'react';
import AddBlog from './AddBlog';
import DeleteBlog from './DeleteBlog';
import { deleteBlog } from '../../../services/blog';
import { useNavigate } from 'react-router-dom';
import EditBlog from './EditBlog';
import { toastError, toastSuccess } from '../../../helpers/Toast';
import Loading from '../../../helpers/Loading';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSpinner } from '../../../app/loadingSlice';
import { fetchBlogs } from '../../../app/blog/blogAction';

const AdminBlog = () => {
  const {loading} = useSelector((state) => state.loading)
  const {userInfo} = useSelector((state) => state.user)
  const {blogList} = useSelector(({blogs:listBlogs}) => listBlogs)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
      dispatch(fetchBlogs())
  },[dispatch])

  const deletedBlog = async (blogId) => {
    if(userInfo?.role === "admin"){
      dispatch(loadingSpinner(true));
      try {
        const response = await deleteBlog(blogId);
        if(response.status === 200){
          toastSuccess("Blog deleted successfully");
          dispatch(loadingSpinner(false));
          dispatch(fetchBlogs())
          navigate('/admin')
        }
      } catch (err) {
        console.log(err.message);
        dispatch(loadingSpinner(false));
      }
    }else toastError('you dont have permission')
  };

  return (
      <div className="containerr py-10 min-h-screen">
      <Helmet>
        <title>Admin-Blogs</title>
      </Helmet>
      <AddBlog/>
      <section className='my-5'>
        {loading===true && <Loading/>}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {blogList.Blogs?.map(blog => (
          <div key={blog._id}>
            <img src={`${process.env.REACT_APP_BASE_URL}/${blog.imageUrl}`}alt={blog.title} className="h-64"/>
            <div className='flex justify-between'>
              <EditBlog blogTitle={blog.title} blogId={blog._id}/>
              <DeleteBlog deleted={()=>deletedBlog(blog._id)}/>
            </div>
          </div>
        ))}
        </div>
      </section>
      </div>
  );
};

export default AdminBlog;
