import { FC, useState, FormEvent, useRef, useEffect } from "react";
import "./index.css";


const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef && inputRef.current) {
      const value = inputRef.current.value;
      if (value === "") return;
      setValue(inputRef.current.value);
      {console.log('ref:', inputRef.current.value, "state:", value)};
    }
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <input type="text" className="search__input" placeholder="Find a film..." ref={inputRef}/>
      <button className="search__button" type="submit">Search</button>
    </form>
  );
}

export default Search;
