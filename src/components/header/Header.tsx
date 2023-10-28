import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import './index.css'


const Header: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <header className="header">
      <Link to="/">Logo</Link>
      <nav className="header-nav">
        {children}
      </nav>
    </header>
  );
}

export default Header;
