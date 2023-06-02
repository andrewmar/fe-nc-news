import { useEffect, useState } from "react";
import { fetchAllArticles } from "../utils";
import { useSearchParams, Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import Spinner from "./Spinner";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortingOrder, setSortingOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");
  const topic = searchParams.get("topic");

  useEffect(() => {
    const params = {
      sort_by: sortBy || "created_at",
      order: sortingOrder || "desc",
    };

    if (topic) {
      params.topic = topic;
    }

    fetchAllArticles(params).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });

    setSearchParams(params);
  }, [topic, sortBy, sortingOrder]);

  const handleOrderChange = (event) => {
    setSortingOrder(event.target.value);
  };

  return (
    <div className="articles-list-container">
      <h2>All Articles:</h2>
      <label htmlFor="sort-by">Sort by</label>
      <select
        name="sort-by"
        id="sort-by"
        defaultValue={"created_at"}
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        <option value="created_at">date</option>
        <option value="comment_count">comments</option>
        <option value="votes">votes</option>
      </select>
      <div>
        <label>
          <input
            type="radio"
            name="order"
            value="asc"
            checked={sortingOrder === "asc"}
            onChange={handleOrderChange}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            name="order"
            value="desc"
            checked={sortingOrder === "desc"}
            onChange={handleOrderChange}
          />
          Descending
        </label>
      </div>

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
