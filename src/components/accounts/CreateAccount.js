import { Link } from "react-router-dom";
import "./createAccount.css";
import { useState } from "react";
import { generateId } from "../../common/utils";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newAccount = {
      id: generateId(),
      name: name,
      type: type,
      amount: 0,
      registeredAt: new Date(),
    };

    const accounts = JSON.parse(localStorage.getItem("accounts"));

    if (accounts) {
      accounts.push(newAccount);
      localStorage.setItem("accounts", JSON.stringify(accounts));
    } else {
      localStorage.setItem("accounts", JSON.stringify([newAccount]));
    }

    // Reset Fields
    setName("");
    setType("");
  };

  return (
    <div className="create-account-wrapper">
      <div className="account-form-wrapper">
        <div className="top-of-form">
          <span className="form-eyebrow">Account setup</span>
          <h1>Create an account</h1>
          <p>Enter the account holder details and choose an account type.</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="accountName">Full name</label>
            <input
              id="accountName"
              type="text"
              placeholder="e.g. Alex Morgan"
              className="create-input"
              value={name}
              name="name"
              autoComplete="name"
              onChange={handleNameChange}
              required
              minLength={5}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="accountType">Account type</label>
            <select
              id="accountType"
              className="create-input"
              name="type"
              value={type}
              onChange={handleTypeChange}
              required
            >
              <option value="">Select Account Type</option>
              <option value="CURRENT">Current</option>
              <option value="SAVING">Saving</option>
            </select>
          </div>

          <div className="add-account-footer">
            <div className="account-submit-action">
              <button type="submit">CREATE ACCOUNT</button>
            </div>
            <Link className="account-cancel-action" to="/accounts">View all accounts</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateAccount;
