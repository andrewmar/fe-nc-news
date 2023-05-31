import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../utils";

export const SingleArticle = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id).then((article) => {
      setCurrentArticle(article);
    });
  }, [article_id]);

  return (
    <section className="single-article">
      <h2>{currentArticle.title}</h2>
      <img src={currentArticle.article_img_url} alt={currentArticle.title} />
      <p>{currentArticle.body}</p>
      <div className="article-info">
        <p className="author">by {currentArticle.author}</p>
        <div className="vote-buttons">
          <button>Up</button>
          <p>{currentArticle.votes}</p>
          <button>Down</button>
        </div>
        <div className="comment-section">
          <p className="comments">Comments ({currentArticle.comment_count})</p>
          <button className="add-comment-button">Add comment</button>
        </div>
      </div>
    </section>
  );
};
