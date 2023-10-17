import { FC, PropsWithChildren } from "react";


const Header: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <header>
      <h2>Header</h2>
      {children}
    </header>
  );
}

export default Header;
