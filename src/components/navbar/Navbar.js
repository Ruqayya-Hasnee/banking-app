import { NavLink, Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">Bank</Link>

      <ul aria-label="Primary navigation">
        <li>
          <NavLink to="/" end>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/accounts">Accounts</NavLink>
        </li>
        <li>
          <NavLink to="/transactions">Transactions</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
