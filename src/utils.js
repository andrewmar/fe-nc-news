import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-erky.onrender.com/api",
});

export const fetchAllArticles = () => {
  return newsApi.get("/articles").then((response) => {
    return response.data;
  });
};
