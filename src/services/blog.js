import http from "./httpService";

export const getAllBlogs = () => {
    return http.get(`${process.env.SERVERAPI}/api/blogList`);
};
export const getBlogs = () => {
    return http.get(`${process.env.SERVERAPI}/api/blogs`);
};
export const getBlog = (title)=>{
    return http.get(`${process.env.SERVERAPI}/api/blogs/${title}`)
}
export const newBlog = (blog) => {
    return http.post(`${process.env.SERVERAPI}/api/blog`, blog);
};
export const updateBlogs = (id, blog) => {
    return http.put(`${process.env.SERVERAPI}/api/blog/${id}`, blog);
};
export const deleteBlog = (id) => {
    return http.delete(`${process.env.SERVERAPI}/api/blog/${id}`);
}