export const CommentCard = ({ comment }) => {
  const date = new Date(comment.created_at);
  const formattedDate = date.toLocaleString();

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
