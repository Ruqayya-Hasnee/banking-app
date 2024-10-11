import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    setAccounts(accounts ? accounts : []);
  }, []);

  return (
    <div className="table-wrapper">
      <div className="wrapper">
        <div className="table-actions">
          <Link to="/">Back to dashboard</Link>
          <Link to="/accounts/create">+Add new account</Link>
        </div>
        <p>Accounts</p>
        <table>
          <tr>
            <th>Account #</th>
            <th>Name</th>
            <th>Registered</th>
            <th>Account Type</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
          {accounts.map((acc) => (
            <tr>
              <td>{acc.id}</td>
              <td>{acc.name}</td>
              <td>{new Date(acc.registeredAt).toDateString()}</td>
              <td>{acc.type}</td>
              <td>{acc.amount}</td>
              <td className="table-buttons">
                <Link to={`/accounts/${acc.id}/deposit`}>Deposit</Link>
                <Link to={`/accounts/${acc.id}/withdraw`}>Withdraw</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default Accounts;
