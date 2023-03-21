import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}/api` }),
  tagTypes: ["BLOG"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    getBlogList: builder.query({
      query: () => "/blogList",
      providesTags: (result = [], error, arg) => [
        "BLOG",
        ...result?.Blogs.map(({ _id }) => ({ type: "BLOG", id:_id })),
      ],
    }),
    getBlog: builder.query({
      query: (initialBlogTitle) => `/blogs/${initialBlogTitle}`,
      providesTags: (result, error, arg) => [{ type: "BLOG", id: arg }],
    }),
    addNewBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: data,
      }),
      invalidatesTags: ["BLOG"],
    }),
    editBlog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/blog/${id}`,
        method: "PUT",
        body: data,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "BLOG", id: arg._id },
      ],
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }),
      invalidatesTags: ['BLOG'],
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery, useGetBlogListQuery, useAddNewBlogMutation, useEditBlogMutation, useDeleteBlogMutation, useLazyGetBlogQuery } = blogSlice;
