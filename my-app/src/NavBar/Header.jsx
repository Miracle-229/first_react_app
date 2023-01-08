import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink activeClassName="activeLink" to="/registr">
            Registration
          </NavLink>
        </li>
        <li>
        {props.isAuth?props.login:
          <NavLink activeClassName="activeLink" to="/login">
            Login
          </NavLink>
        }
        </li>
      </ul>
    </div>
  );
};

export default Header;
