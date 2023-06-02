import { dateFormatter } from "../utils";

export const CommentCard = ({ comment }) => {
  const formattedDate = dateFormatter(comment.created_at);

  return (
    <section className="comment-card">
      <p>
        <span className="comment-author">{comment.author}</span> created at{" "}
        {formattedDate}
      </p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <button className="delete-button">Delete</button>
    </section>
  );
};
