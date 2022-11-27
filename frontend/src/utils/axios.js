import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;

//     if (typeof error.response === "undefined") {
//       alert(
//         "A server/network error occurred. " +
//           "Looks like CORS might be the problem. " +
//           "Sorry about this - we will get it fixed shortly."
//       );
//       return Promise.reject(error);
//     }

//     if (
//       error.response.status === 401 &&
//       originalRequest.url === baseURL + "token/refresh/"
//     ) {
//       window.location.href = "/login/";
//       return Promise.reject(error);
//     }

//     if (
//       error.response.data.code === "token_not_valid" &&
//       error.response.status === 401 &&
//       error.response.statusText === "Unauthorized"
//     ) {
//       const refreshToken = localStorage.getItem("refresh_token");

//       if (refreshToken) {
//         let access_token = localStorage.getItem("access_token")
//           ? localStorage.getItem("access_token")
//           : null;
//         const userAccess = jwt_decode(access_token);
//         const accessIsExpired = dayjs.unix(userAccess.exp).diff(dayjs()) < 1;

//         if (accessIsExpired) {
//           return axiosInstance
//             .post("/token/refresh/", {
//               refresh: refreshToken,
//             })
//             .then((response) => {
//               localStorage.setItem("access_token", response.data.access);
//               localStorage.setItem("refresh_token", response.data.refresh);

//               axiosInstance.defaults.headers["Authorization"] =
//                 "JWT " + response.data.access;
//               originalRequest.headers["Authorization"] =
//                 "JWT " + response.data.access;

//               return axiosInstance(originalRequest);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         } else {
//           console.log("Refresh token is expired");
//           // window.location.href = "/";
//         }
//       } else {
//         console.log("Refresh token not available.");
//         // window.location.href = "/";
//       }
//     }

//     // specific error handling done elsewhere
//     return Promise.reject(error);
//   }
// );

axiosInstance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "http://localhost:8000/api/token/"
    ) {
      console.log("error de código e de url");
      window.location.href = "/";
      return Promise.reject(error);
    }

    let access_token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : null;

    let refresh_token = localStorage.getItem("refresh_token")
      ? localStorage.getItem("refresh_token")
      : null;

    if (!access_token || !refresh_token) {
      window.location.href = "/";
    }

    const userAccess = jwt_decode(access_token);
    const accessIsExpired = dayjs.unix(userAccess.exp).diff(dayjs()) < 1;

    const userRefresh = jwt_decode(refresh_token);
    const refreshIsExpired = dayjs.unix(userRefresh.exp).diff(dayjs()) < 1;

    // console.log("access", accessIsExpired);

    // get rid of the user with expired refresh token
    if (refreshIsExpired) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      window.location.href = "/";
    }

    if (accessIsExpired) {
      return axiosInstance
        .post("/token/refresh/", { refresh: refresh_token })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);

          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.access;
          originalRequest.headers["Authorization"] =
            "JWT " + response.data.access;

          return axiosInstance(originalRequest);
        });
    }

    // console.log(originalRequest);
  }
);

export default axiosInstance;
