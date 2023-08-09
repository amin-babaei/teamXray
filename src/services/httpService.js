import axios from "axios";

const app = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
  });
  
  app.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err)
  );
  
  app.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalConfig = err.config;
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/refresh-token`,
            { withCredentials: true }
          );
          if (data) return app(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(err);
    }
  );


const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    delete: app.delete,
    create: app.create
};
export default http