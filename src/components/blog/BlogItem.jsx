import React from "react";
import { Link } from "react-router-dom";
const BlogItem = ({ post }) => {
  return (
    <>
      <div
        className="rounded overflow-hidden shadow-lg shadow-xred"
        key={post._id}
      >
        <img
          className="w-full h-60 sm:h-72"
          src={`${process.env.SERVERAPI}/${post.imageUrl}`}
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-3 text-left">
            {post.title.split("-").join(" ")}
          </h2>
          <p className="text-gray-500 text-sm text-left h-20">
            {post.description.length < 65
              ? post.description
              : `${post.description.slice(0, 65)} ...`}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <span className="rounded-full text-sm text-white">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <Link to={`/blogs/${post.title}`}>
            <button className="btn">Read more</button>
          </Link>
        </div>
      </div>
      {!post && <div>Loading...</div>}
    </>
  );
};

export default BlogItem;
