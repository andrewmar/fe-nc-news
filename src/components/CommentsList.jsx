import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../utils";
import { CommentCard } from "./CommentCard";
import Spinner from "./Spinner";

export const CommentsList = ({ article }) => {
  const { article_id, comment_count } = article;
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      fetchCommentsByArticle(article_id).then((comments) => {
        setCommentsList(comments);
        setIsLoading(false);
      });
    }
  }, [article_id, showComments]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <section>
      <button className="toggle-comments" onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && (
        <div>
          <p className="comments-count">Comments ({comment_count})</p>
          {isLoading ? (
            <Spinner />
          ) : (
            <ul className="comments-list">
              {commentsList.map((comment) => (
                <li key={comment.comment_id}>
                  <CommentCard comment={comment} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};
