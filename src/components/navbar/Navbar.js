import { Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navbar-title">Bank</p>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
