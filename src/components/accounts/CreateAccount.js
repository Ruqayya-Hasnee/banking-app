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
        <p className="top-of-form">Enter account details below</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Enter full name here.."
              className="create-input"
              value={name}
              name="name"
              onChange={handleNameChange}
              required
              minLength={5}
            />
          </div>
          <div className="input-wrapper">
            <label>Account Type:</label>
            <select
              className="Enter type here..."
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
            <div className="actions">
              <button type="submit">CREATE ACCOUNT</button>
            </div>
            <div className="actions">
              <Link to="/accounts">VIEW ALL ACCOUNTS</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateAccount;
