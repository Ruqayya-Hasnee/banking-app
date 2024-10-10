import { Link } from "react-router-dom";
import "./withdraw.css";
const Withdraw = () => {
  return (
    <div className="create-withdraw-wrapper">
      <div className="withdraw-form-wrapper">
        <p className="top-of-withdraw-form">Enter Transactions Details</p>
        <form className="withdraw-form">
          <div className="withdraw-input-wrapper">
            <label>Amount:</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="create-withdraw-input"
            />
          </div>
          <div className="withdraw-input-wrapper">
            <label>Type:</label>
            <select className="select"  disabled>
              <option value="">Select Type</option>
              <option value="">Deposit</option>
              <option value="">Current</option>
            </select>
          </div>
          <div className="withdraw-description-wrapper">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter transactions"
              className="description-input"
            />
          </div>
        </form>
        <div className="add-withdraw-footer">
          <div className="withdraw-actions">
            <Link to="">Enter</Link>
          </div>
          <div className="withdraw-actions">
            <Link to="/transactions">View all transactions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
