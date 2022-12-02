import http from "./httpService";

export const getAllApply = () => {
    return http.get(`${process.env.SERVERAPI}/api/applyList`);
};
export const createApply = (apply) => {
    return http.post(`${process.env.SERVERAPI}/api/apply`,apply);
};