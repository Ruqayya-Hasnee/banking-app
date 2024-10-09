import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Bank</p>

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
