import http from "./httpService";

export const getAllBlogs = () => {
    return http.get(`${process.env.REACT_APP_BASE_URL}/api/blogList`);
};
export const getBlogs = () => {
    return http.get(`${process.env.REACT_APP_BASE_URL}/api/blogs`);
};
export const getBlog = (title)=>{
    return http.get(`${process.env.REACT_APP_BASE_URL}/api/blogs/${title}`)
}
export const newBlog = (blog) => {
    return http.post(`${process.env.REACT_APP_BASE_URL}/api/blog`, blog);
};
export const updateBlogs = (id, blog) => {
    return http.put(`${process.env.REACT_APP_BASE_URL}/api/blog/${id}`, blog);
};
export const deleteBlog = (id) => {
    return http.delete(`${process.env.REACT_APP_BASE_URL}/api/blog/${id}`);
}