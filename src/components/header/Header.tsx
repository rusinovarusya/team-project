import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import './index.css'


const Header: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <header className="header">
      <h2>Header</h2>
      <Link to="/">Logo</Link>
      <nav className="header-nav">
        {children}
        {/* <ul>
          <li><Link to="/">Logo</Link></li>
          <li><Link to="/signin">Sign in</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          {children}
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
