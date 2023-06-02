import { useEffect, useState } from "react";
import { fetchAllTopics } from "../utils";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { TopicCard } from "./TopicCard";

export const TopicsList = () => {
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllTopics().then((topics) => {
      setTopicsList(topics);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="topics-list-container">
      <h2>All topics</h2>
      {isLoading && <Spinner />}
      <ul className="topics-list">
        {topicsList.map((topic) => (
          <li key={topic.slug} >
            <Link to={`/articles?topic=${topic.slug}`}>
              <TopicCard topic={topic} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
