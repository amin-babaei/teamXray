import http from "./httpService";
import config from './config.json'

export const getAllBlogs = () => {
    return http.get(`${config.serverapi}/api/blogList`);
};
export const getBlogs = () => {
    return http.get(`${config.serverapi}/api/blogs`);
};
export const getBlog = (title)=>{
    return http.get(`${config.serverapi}/api/blogs/${title}`)
}
export const newBlog = (blog) => {
    return http.post(`${config.serverapi}/api/blog`, blog);
};
export const updateBlogs = (id, blog) => {
    return http.put(`${config.serverapi}/api/blog/${id}`, blog);
};
export const deleteBlog = (id) => {
    return http.delete(`${config.serverapi}/api/blog/${id}`);
}