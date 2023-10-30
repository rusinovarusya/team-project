import { FC, FormEvent, useRef, SetStateAction, Dispatch } from "react";
import "./index.css";

interface Props {
  setQuery: Dispatch<SetStateAction<string>>;
}

const Search: FC<Props> = ({ setQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef && inputRef.current) {
      const value = inputRef.current.value;
      if (value === "") return;
      setQuery(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Find a film..."
        ref={inputRef}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
