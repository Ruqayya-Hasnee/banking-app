import { Link } from "react-router-dom";
import "./deposit.css";

const Deposit = () => {
  return (
    <div className="create-deposit-wrapper">
      <div className="deposit-form-wrapper">
        <p className="top-of-deposit-form">Enter Transactions Details</p>
        <form className="deposit-form">
          <div className="deposit-input-wrapper">
            <label>Amount:</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="create-deposit-input"
            />
          </div>
          <div className="deposit-input-wrapper">
            <label>Type:</label>
            <select className="select"  disabled>
              <option value="">Select Type</option>
              <option value="">Deposit</option>
              <option value="">Withdraw</option>
            </select>
          </div>
          <div className="deposit-description-wrapper">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter descriptions"
              className="description-input"
            />
          </div>
        </form>
        <div className="add-deposit-footer">
          <div className="deposit-actions">
            <Link to="">Enter</Link>
          </div>
          <div className="deposit-actions">
            <Link to="/transactions">View all transactions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
