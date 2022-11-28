import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// axiosInstance.interceptors.response.use(
//   async (res) => {
//     return res;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response.status === 401 &&
//       originalRequest.url === "http://localhost:8000/api/token/"
//     ) {
//       console.log("error de código e de url");
//       window.location.href = "/";
//       return Promise.reject(error);
//     }

//     let access_token = localStorage.getItem("access_token")
//       ? localStorage.getItem("access_token")
//       : null;

//     let refresh_token = localStorage.getItem("refresh_token")
//       ? localStorage.getItem("refresh_token")
//       : null;

//     if (!access_token || !refresh_token) {
//       window.location.href = "/";
//     }

//     const userAccess = jwt_decode(access_token);
//     const accessIsExpired = dayjs.unix(userAccess.exp).diff(dayjs()) < 1;

//     const userRefresh = jwt_decode(refresh_token);
//     const refreshIsExpired = dayjs.unix(userRefresh.exp).diff(dayjs()) < 1;

//     // console.log("access", accessIsExpired);

//     // get rid of the user with expired refresh token
//     if (refreshIsExpired) {
//       localStorage.removeItem("access_token");
//       localStorage.removeItem("refresh_token");
//       axiosInstance.defaults.headers["Authorization"] = null;
//       window.location.href = "/";
//     }

//     if (accessIsExpired) {
//       return axiosInstance
//         .post("/token/refresh/", { refresh: refresh_token })
//         .then((response) => {
//           localStorage.setItem("access_token", response.data.access);
//           localStorage.setItem("refresh_token", response.data.refresh);

//           axiosInstance.defaults.headers["Authorization"] =
//             "JWT " + response.data.access;
//           originalRequest.headers["Authorization"] =
//             "JWT " + response.data.access;

//           return axiosInstance(originalRequest);
//         });
//     }

//     // console.log(originalRequest);
//   }
// );

// for multiple requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    // console.log("error 105", error);
    if (error.response.status === 401 && !originalRequest._retry) {
      // console.log("passsou pelo primeiro if");
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            // console.log("line 112", token);
            originalRequest.headers["Authorization"] = "JWT " + token;
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      // console.log(
      //   "isRefresh e originalRequest",
      //   isRefreshing,
      //   originalRequest._retry
      // );
      const refreshToken = localStorage.getItem("refresh_token");
      return new Promise(function (resolve, reject) {
        axiosInstance
          .post("token/refresh/", { refresh : refreshToken })
          .then(({ data }) => {
            // console.log("line 129", data);
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
            axiosInstance.defaults.headers.common["Authorization"] =
              "JWT " + data.access;
            originalRequest.headers["Authorization"] = "JWT " + data.access;
            // console.log('check correct localStorage data', localStorage)
            processQueue(null, data.access);
            resolve(axiosInstance(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
