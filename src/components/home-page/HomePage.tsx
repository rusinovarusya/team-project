import { FC, PropsWithChildren } from "react";


const HomePage: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <article>
      <h2>Home page</h2>
      {children}
    </article>
  );
}

export default HomePage;
