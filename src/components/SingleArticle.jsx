import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleArticle, patchArticleVotes } from "../utils";
import { CommentsList } from "./CommentsList";
import Spinner from "./Spinner";
import { UserContext } from "../context/userContext";

export const SingleArticle = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleArticle(article_id).then((article) => {
      setCurrentArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleVote = (event) => {
    event.preventDefault();

    if (user.username === "Guest") {
      navigate("/", { state: `/articles/${article_id}` });
      return;
    }

    const adjustment = +event.target.value;
    setCurrentArticle((curArticle) => {
      return { ...curArticle, votes: curArticle.votes + adjustment };
    });
    setIsError(false);

    patchArticleVotes(article_id, adjustment).catch(() => {
      setCurrentArticle((curArticle) => {
        return { ...curArticle, votes: curArticle.votes - adjustment };
      });
      setIsError(true);
    });
  };

  return (
    <section className="single-article">
      {isLoading && <Spinner />}
      <h2>{currentArticle.title}</h2>
      <img src={currentArticle.article_img_url} alt={currentArticle.title} />
      <p>{currentArticle.body}</p>
      <div className="article-info">
        <p className="author">by {currentArticle.author}</p>
        <div className="vote-buttons">
          <button onClick={handleVote} value={1}>
            Up
          </button>
          <p>{currentArticle.votes}</p>
          <button onClick={handleVote} value={-1}>
            Down
          </button>
        </div>
        {isError && <p className="error"> Something went wrong, try again! </p>}
        <section className="comment-section">
          <CommentsList article_id={article_id} />
        </section>
      </div>
    </section>
  );
};
