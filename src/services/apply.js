import http from "./httpService";
import config from './config.json'

export const getAllApply = () => {
    return http.get(`${config.localapi}/api/applyList`);
};
export const createApply = (apply) => {
    return http.post(`${config.localapi}/api/apply`,apply);
};