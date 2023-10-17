import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";


const Header: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <header>
      <h2>Header</h2>
      <nav>
        <ul>
          <li><Link to="/">Logo</Link></li>
          <li><Link to="/signin">Sign in</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </nav>
      {children}
    </header>
  );
}

export default Header;
