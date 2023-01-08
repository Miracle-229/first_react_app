import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: true,
});

export const UsersApi = (pageSize, currentPage) => {
  return instance.get(`data?_limit=${pageSize}&_page=${currentPage}`);
};

export const ProfileApi = (userID) => {
  return instance.get(`profile` + userID);
};
