import { useState } from "react";
import BlogItem from "../../components/blog/BlogItem";
import { Helmet } from "react-helmet-async";
import Loading from './../../helpers/Loading';
import { useGetBlogListQuery } from "../../app/features/blogSlice";

const Blog = () => {
  const { data, isError, isLoading } = useGetBlogListQuery()
  const [query, setQuery] = useState({ text: "" });
  const [filterData, setfilterData] = useState([]);

  const blogSearch = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allBlogs = data?.Blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(event.target.value.split(" ").join("-"));
    });
    setfilterData(allBlogs);
  };

  return (
    <main className="bg-black font-main">
       <Helmet>
        <title>xrayTeam-Blogs</title>
        <meta name="description" content="blogs xray team" />
      </Helmet>
      <div className="containerr py-14">
        {isLoading && <Loading/>}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.values(query.text).length < 1 ? data?.Blogs.map((blog) => (
            <BlogItem post={blog} key={blog._id} />
            ))
          :filterData.map(blog => (
            <BlogItem post={blog} key={blog._id} />
          ))
          }
        </div>
        {(filterData.length === 0 || isError) && Object.values(query.text).length > 0 && <h2 className="text-5xl text-center py-10">not found</h2>}
      </div>
    </main>
  );
};

export default Blog;
