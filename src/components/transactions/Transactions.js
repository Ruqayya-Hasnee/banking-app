import { Link } from "react-router-dom";

const Transactions = () => {
  return (
    <div className="table-wrapper">
      <div className="wrapper">
        <div className="table-action">
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
          <tr>
            <td>6129667674</td>
            <td>10/9/2024, 12:04:07 PM</td>
            <td>6568749807</td>
            <td>credit</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>6129667674</td>
            <td>10/9/2024, 12:04:07 PM</td>
            <td>6568749807</td>
            <td>debit</td>
            <td>1000</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Transactions;
