import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { UserContext } from "./context/userContext";
import {
  Header,
  UserLogin,
  ArticlesList,
  Nav,
  SingleArticle,
  CommentsList,
  TopicsList,
} from "./components";

function App() {
  const [user, setUser] = useState({ username: "", name: "", avatar_url: "" });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<CommentsList />}
          />
          <Route path="/topics" element={<TopicsList />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
