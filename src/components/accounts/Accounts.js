import { Link } from "react-router-dom";

const Accounts = () => {
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
          <tr>
            <td>6568749807</td>
            <td>Ammar</td>
            <td>10/9/2024</td>
            <td>Saving</td>
            <td>1000$</td>
            <td className="table-buttons">
              <Link to="/accounts/:accountId/deposit">Deposit</Link>
              <Link to="/accounts/:accountId/withdraw">Withdraw</Link>
            </td>
          </tr>
          <tr>
            <td>6568749807</td>
            <td>Ammar</td>
            <td>10/9/2024</td>
            <td>Saving</td>
            <td>1000$</td>
            <td className="table-buttons">
              <Link to="/accounts/:accountId/deposit">Deposit</Link>
              <Link to="/accounts/:accountId/withdraw">Withdraw</Link>
            </td>
          </tr>
          <tr>
            <td>6568749807</td>
            <td>Ammar</td>
            <td>10/9/2024</td>
            <td>Saving</td>
            <td>1000$</td>
            <td className="table-buttons">
              <Link to="/accounts/:accountId/deposit">Deposit</Link>
              <Link to="/accounts/:accountId/withdraw">Withdraw</Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Accounts;
