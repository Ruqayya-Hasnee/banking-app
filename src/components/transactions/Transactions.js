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
          <tr>
            <th>TransactionId</th>
            <th>Time</th>
            <th>Account#</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
           {transactions.map((trans) => (
            <tr>
              <td>{trans.id}</td>
              <td>{new Date(trans.time).toDateString()}</td>
              <td>{trans.accountId}</td>
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default Transactions;
