import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils";
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import Spinner from "./Spinner";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles().then(({ articles }) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="articles-list-container">
      <h2>All Articles:</h2>
      {isLoading && <Spinner />}
      <ul className="articles-list">
        {articlesList.map((article) => (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard article={article} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
