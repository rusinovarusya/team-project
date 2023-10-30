import { FC, useState } from "react";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import "./index.css";
import Search from "../search/Search";

const HomePage: FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <article className="home-page-container">
      <Search setQuery={setQuery} />
      <p className="description">There is a description...</p>
      <Content query={query} />
      <Footer />
    </article>
  );
};

export default HomePage;
