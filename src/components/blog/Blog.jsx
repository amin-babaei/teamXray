import { Link } from 'react-router-dom';
import { Oval} from  'react-loader-spinner'
import BlogItem from './BlogItem';
import { useGetBlogsQuery } from "../../app/features/blogSlice";

const Blog = () => {

  const { data, error, isLoading } = useGetBlogsQuery()

  return (
    <section className="bg-black py-10">
    <h3 className="text-center text-3xl text-white">Blog</h3>
      <div className="containerr mt-14">
      {isLoading===true && <div className="w-full flex justify-center my-5"><Oval color="#fff" secondaryColor="#fff"/></div>}
      {error && <h2 className="text-white text-xl my-5">cannot fetch</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data?.Blogs.map(post => (
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
