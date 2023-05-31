import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchCommentsByArticle } from "../utils";
import { CommentCard } from "./CommentCard";
import Spinner from "./Spinner";

export const CommentsList = () => {
  let { state: title } = useLocation();
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((comments) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, [article_id]);
  return (
    <section>
      <h2>{title}</h2>
      {isLoading && <Spinner />}
      <ul className="comments-list">
        {commentsList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
