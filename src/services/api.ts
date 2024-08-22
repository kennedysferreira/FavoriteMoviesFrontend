import axios from "axios";

export const api = axios.create({
  baseURL: "https://favoritemovies-api.onrender.com",
});