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
          <thead>
            <tr>
              <th>Account #</th>
              <th>Name</th>
              <th>Registered</th>
              <th>Account Type</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc) => (
              <tr key={acc.id}>
                <td><span className="table-id">#{String(acc.id).slice(-6)}</span></td>
                <td>{acc.name}</td>
                <td>{new Date(acc.registeredAt).toDateString()}</td>
                <td><span className={`account-type ${String(acc.type).toLowerCase()}`}>{acc.type}</span></td>
                <td><strong>${Number(acc.amount).toLocaleString()}</strong></td>
                <td className="table-buttons">
                  <Link to={`/accounts/${acc.id}/deposit`}>Deposit</Link>
                  <Link to={`/accounts/${acc.id}/withdraw`}>Withdraw</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Accounts;
