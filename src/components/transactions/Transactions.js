import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions"));
    setTransactions(transactions ? transactions : []);
  }, []);

  return (
    <div className="table-wrapper">
      <div className="wrapper">
        <div className="table-actions">
          <Link to="/">Back to dashboard</Link>
        </div>
        <p>Transactions</p>
        <table>
          <thead>
            <tr>
              <th>TransactionId</th>
              <th>Time</th>
              <th>Account#</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans) => (
              <tr key={trans.id}>
                <td data-label="TransactionId"><span className="table-id">#{String(trans.id).slice(-6)}</span></td>
                <td data-label="Time">{new Date(trans.time).toDateString()}</td>
                <td data-label="Account#">{trans.accountId}</td>
                <td data-label="Type"><span className={`transaction-type ${String(trans.type).toLowerCase()}`}>{trans.type}</span></td>
                <td data-label="Amount"><strong>${Number(trans.amount).toLocaleString()}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Transactions;
