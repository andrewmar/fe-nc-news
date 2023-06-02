import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-erky.onrender.com/api",
});

export const fetchAllArticles = (params) => {
  return newsApi.get("/articles", { params }).then(({ data: { articles } }) => {
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
      return comments;
    });
};

export const patchArticleVotes = (articleId, voteChange) => {
  const patchBody = {
    inc_votes: voteChange,
  };
  return newsApi.patch(`/articles/${articleId}`, patchBody);
};

export const postNewComment = (articleId, commentBody) => {
  return newsApi
    .post(`/articles/${articleId}/comments`, commentBody)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const fetchAllTopics = () => {
  return newsApi.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const dateFormatter = (date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleString();
  return formattedDate;
};
