export const TopicCard = ({ topic }) => {
  return (
    <div className="topic-card">
      <p className="topic-slug">All articles about {topic.slug}</p>
      <p className="topic-description">{topic.description}</p>
    </div>
  );
};
