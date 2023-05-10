import axios from 'axios';

// Axios 인스턴스 생성
export const API = axios.create({});

// // 요청 보내기 전 intercept해서 accessToken() 받아오기
// API.interceptors.request.use((res) => {
//   // getAccessToken() 함수를 통해 accessToken 받아오기
//   const accessToken = getAccessToken();

//   // AccessToken이 있다면, Content-Type, Authorization 설정
//   if (accessToken) {
//     res.headers['Content-Type'] = 'application/json;charset=UTF-8';
//     res.headers['Authorization'] = `Bearer ${accessToken}`;
//   }
//   return res;
// });

// // response 받은 후에 실행할 일
// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;

//     if ()
//   }
// )