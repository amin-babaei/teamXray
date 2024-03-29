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
        credentials:"include",
        body: data,
      }),
      invalidatesTags: ["BLOG"],
    }),
    editBlog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/blog/${id}`,
        method: "PUT",
        body: data,
        credentials: "include"
      }),
      invalidatesTags: (result, error, arg) => {
        if (!error) {
          return [{ type: "BLOG", id: arg._id }];
        }
        return [];
      },
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "DELETE",
        credentials: "include"
      }),
      invalidatesTags: (result, error, blogId) => {
        if (!error) {
          return [{ type: "BLOG", id: blogId }];
        }
        return [];
      },
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery, useGetBlogListQuery, useAddNewBlogMutation, useEditBlogMutation, useDeleteBlogMutation, useLazyGetBlogQuery } = blogSlice;
