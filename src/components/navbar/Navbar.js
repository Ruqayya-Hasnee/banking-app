import { Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">Bank</Link>

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
