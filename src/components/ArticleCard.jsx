export const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <p className="article-topic">
        <span className="topic-prefix">Topic:</span> {article.topic}
      </p>
      <h3 className="article-title">{article.title}</h3>
      <p className="article-info">
        Posted by <span className="author-name">{article.author}</span>
        <span className="comment-count">Comments: {article.comment_count}</span>
      </p>
    </div>
  );
};
