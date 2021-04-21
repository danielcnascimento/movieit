import { axiosCancelable } from "../helper/axios.helper";
import { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://www.episodate.com/api",
};

export const loadSearch = async (text: string) =>
  axiosCancelable(`/search?q=${text}`, axiosConfig);
