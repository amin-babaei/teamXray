/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Oval} from  'react-loader-spinner'
import { getBlogs } from "../../services/blog";
import BlogItem from './BlogItem';
import { useDispatch, useSelector } from "react-redux";
import { loadingSpinner } from "../../app/loadingSlice";

const Blog = () => {
  const [data,setData] = useState([])
  const {loading} = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    const getBlogsHome = async() => {
        dispatch(loadingSpinner(true));
        try {
            const { data } = await getBlogs();
            setData(data.Blogs)
            dispatch(loadingSpinner(false));
        } catch (error) {
            console.log(error)
            dispatch(loadingSpinner(false));
        }
    };
    getBlogsHome();
}, []);

  return (
    <section className="bg-black py-10">
    <h3 className="text-center text-3xl text-white">Blog</h3>
      <div className="containerr mt-14">
      {loading===true && <div className="w-full flex justify-center my-5"><Oval color="#fff" secondaryColor="#fff"/></div>}
      {!data && <h2 className="text-white text-xl my-5">cannot</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map(post => (
            <BlogItem post={post} key={post._id}/>
          ))}
         
        </div>
        <Link to={"/blogs"} className="flex justify-center m-auto w-44">        
          <button className='btn mt-16 w-full'>see more</button>
        </Link>
      </div>
    </section>
  );
}

export default Blog;
