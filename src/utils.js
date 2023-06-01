import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-erky.onrender.com/api",
});

export const fetchAllArticles = () => {
  return newsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchSingleArticle = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then(({ data: { article } }) => {
    return article;
  });
};

export const fetchCommentsByArticle = (articleId) => {
  return newsApi
    .get(`/articles/${articleId}/comments`)
    .then(({ data: { comments } }) => {
      console.log(comments);
      return comments;
    });
};
