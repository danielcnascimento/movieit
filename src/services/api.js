import { axiosCancelable } from "../helper/axios.helper";

const axiosConfig = {
  baseURL: "https://www.episodate.com/api",
};

export const loadSearch = async (text) =>
  axiosCancelable(`/search?q=${text}`, axiosConfig);
