import http from "./httpService";

export const getAllApply = () => {
    return http.get(`${process.env.REACT_APP_BASE_URL}/api/applyList`);
};
export const createApply = (apply) => {
    return http.post(`${process.env.REACT_APP_BASE_URL}/api/apply`,apply);
};