import http from "./httpService";
import config from './config.json'

export const getAllApply = () => {
    return http.get(`${config.serverapi}/api/applyList`);
};
export const createApply = (apply) => {
    return http.post(`${config.serverapi}/api/apply`,apply);
};