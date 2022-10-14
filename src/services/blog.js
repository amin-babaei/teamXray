import http from "./httpService";
import config from './config.json'

export const getAllBlogs = () => {
    return http.get(`${config.localapi}/api/blogList`);
};
export const getBlogs = () => {
    return http.get(`${config.localapi}/api/blogs`);
};
export const getBlog = (title)=>{
    return http.get(`${config.localapi}/api/blogs/${title}`)
}
export const newBlog = (blog) => {
    return http.post(`${config.localapi}/api/blog`, blog);
};
export const updateBlogs = (id, blog) => {
    return http.put(`${config.localapi}/api/blog/${id}`, blog);
};
export const deleteBlog = (id) => {
    return http.delete(`${config.localapi}/api/blog/${id}`);
}