import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import BlogItem from "../../components/blog/BlogItem";
import { Helmet } from "react-helmet-async";
import Loading from './../../helpers/Loading';
import { fetchBlogs } from "../../app/blog/blogAction";

const Blog = () => {
  const blogList = useSelector(({blogs:listBlogs}) => listBlogs)
  const dispatch = useDispatch()

  const [query, setQuery] = useState({ text: "" });
  const [filterData, setfilterData] = useState([]);

  useEffect(()=>{
    dispatch(fetchBlogs())
  },[])
 
  const blogSearch = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allBlogs = blogList.blogList.Blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(event.target.value.split(" ").join("-"));
    });
    setfilterData(allBlogs);
  };
  console.log(query.text)
  return (
    <main className="bg-black font-main">
       <Helmet>
        <title>xrayTeam-Blogs</title>
        <meta name="description" content="blogs xray team" />
      </Helmet>
      <div className="containerr py-14">
        <div className="mb-8 relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3">
          <span className="fas fa-search cursor-pointer"></span>
        </div>
          <input
            type="search"
            className="block p-4 pl-10 w-full text-sm text-gray-300 bg-black rounded-md border outline-none border-gray-300 focus:border-xred"
            placeholder="you can search blog here !"
            required
            value={query.text}
            onChange={blogSearch}
          />
        </div>
        {blogList.loading === true && <Loading/>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.values(query.text).length < 1 ? blogList.blogList.Blogs?.map((blog) => (
            <BlogItem post={blog} key={blog._id} />
            ))
          :filterData.map(blog => (
            <BlogItem post={blog} key={blog._id} />
          ))
          }
        </div>
        {filterData.length === 0 && Object.values(query.text).length > 0 && <h2 className="text-5xl text-center py-10">not found</h2>}
      </div>
    </main>
  );
};

export default Blog;
