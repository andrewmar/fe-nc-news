import { dateFormatter } from "../utils";

export const ArticleCard = ({ article }) => {
  const formattedDate = dateFormatter(article.created_at);
  return (
    <div className="article-card">
      <p className="article-topic">
        <span className="topic-prefix">Topic:</span> {article.topic}
      </p>
      <h3 className="article-title">{article.title}</h3>
      <p className="article-info">
        Posted by <span className="author-name">{article.author}</span>
        <span className="comment-count">Comments: {article.comment_count}</span>
        <span className="votes">Votes: {article.votes}</span>
        <span className="date">Created at: {formattedDate}</span>
      </p>
    </div>
  );
};
