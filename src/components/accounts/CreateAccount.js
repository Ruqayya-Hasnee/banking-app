import { Link } from "react-router-dom";
import "./createAccount.css";

const CreateAccount = () => {
  return (
    <div className="create-account-wrapper">
      <div className="account-form-wrapper">
        <p className="top-of-form">Enter account details below</p>
        <form className="form">
          <div className="input-wrapper">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Enter full name here"
              className="create-input"
            />
          </div>
          <div className="input-wrapper">
            <label>Account Type:</label>
            <select className="select">
              <option value="">Select Account Type</option>
              <option value="">Current</option>
              <option value="">Saving</option>
            </select>
          </div>
        </form>
        <div className="add-account-footer">
          <div className="actions">
            <Link to="">CREATE ACCOUNT</Link>
          </div>
          <div className="actions">
            <Link to="">VIEW ALL ACCOUNTS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
