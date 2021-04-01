import axios from "axios";

const axiosConfig = {
  baseURL: "https://www.episodate.com/api",
};

export const loadSearch = async (text) =>
  axios.get(`/search?q=${text}`, axiosConfig);
