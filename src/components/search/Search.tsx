import { FC, useState, ChangeEvent } from "react";
import "./index.css";


const Search: FC = () => {

  return (
    <section className="search">
      <input type="text" className="search__input" placeholder="Find a film..." />
      <button className="search__button">Search</button>
    </section>
  );
}

export default Search;
