import { FC, PropsWithChildren } from "react";
import "./index.css";
import Search from "../search/Search";


const HomePage: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <article className="home-page-container">
      <Search />
      <p className="description">
        There is a description...
      </p>
      {children}
    </article>
  );
}

export default HomePage;
