import axios from "axios";

export const app = axios.create({
  baseURL: "https://projeto-14-shopezon-back.herokuapp.com/api",
});
