import { Link } from "react-router-dom";
import "./transaction.css";

const Transaction = (props) => {
  return (
    <div className="create-transaction-wrapper">
      <div className="transaction-form-wrapper">
        <p className="top-of-transaction-form">Enter Transactions Details</p>
        <form className="transaction-form">
          <div className="input-wrapper">
            <label>Amount:</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="transaction-input"
            />
          </div>
          <div className="input-wrapper">
            <label>Type:</label>
            <select
              className="transaction-input"
              defaultValue={props.type}
              disabled
            >
              <option value="">Select Type</option>
              <option value="DEPOSIT">Deposit</option>
              <option value="WITHDRAW">Withdraw</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter description here..."
              className="transaction-input"
            />
          </div>
        </form>
        <div className="add-transaction-footer">
          <div className="transaction-actions">
            <Link to="">Enter</Link>
          </div>
          <div className="transaction-actions">
            <Link to="/transactions">View all transactions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
