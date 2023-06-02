import { useState, useContext } from "react";
import { postNewComment } from "../utils";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export const AddComment = ({ article_id, setCommentsList }) => {
  const [newComment, setNewComment] = useState("");
  const [isError, setIsError] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  let disabledButton = !newComment.trim() && isPosted === false;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.username === "Guest") {
      navigate("/", { state: `/articles/${article_id}` });
      return;
    }

    const comment = {
      body: newComment,
      username: user.username,
    };

    postNewComment(article_id, comment)
      .then((comment) => {
        setCommentsList((currentComments) => {
          return [comment, ...currentComments];
        });
        setNewComment("");
        setIsError(false);
        setIsPosted(true);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
    setIsPosted(false);
  };
  return (
    <section className="new-comment-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="new-comment">Add comment</label>
          <textarea
            id="new-comment"
            name="postComment"
            rows={5}
            value={newComment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={disabledButton}
          className={disabledButton && "disabled-button"}
        >
          Add Comment
        </button>
      </form>
      {isError && <p className="error">Something went wrong, try again!</p>}
      {isPosted && <p className="posted">Comment posted</p>}
    </section>
  );
};
