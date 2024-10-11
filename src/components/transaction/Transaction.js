import { Link, useParams } from "react-router-dom";
import "./transaction.css";
import { useState } from "react";
import { generateId } from "../../common/utils";

const Transaction = (props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: generateId(),
      amount: amount,
      type: props.type,
      accountId: params.accountId,
      description: description,
      time: new Date(),
    };

    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const selectedAccountIndex = accounts.findIndex((acc) => {
      return acc.id == params.accountId;
    });
    if (selectedAccountIndex < 0) return alert("Account not found");
    const selectedAccountBalance = accounts[selectedAccountIndex].amount;
    if (props.type == "DEPOSIT") {
      accounts[selectedAccountIndex].amount =
        selectedAccountBalance + Number(amount);
    } else {
      if (selectedAccountBalance < Number(amount)) {
        alert("Insufficient balance");
        return;
      }
      accounts[selectedAccountIndex].amount =
        selectedAccountBalance - Number(amount);
    }
    localStorage.setItem("accounts", JSON.stringify(accounts));

    const transactions = JSON.parse(localStorage.getItem("transactions"));
    if (transactions) {
      transactions.push(newTransaction);
      localStorage.setItem("transactions", JSON.stringify(transactions));
    } else {
      localStorage.setItem("transactions", JSON.stringify([newTransaction]));
    }

    // TODO: update amount value saved in accounts
    // TODO: Basicaly we have account Id here so we will find accounts in accounts array and update amount for that only

    // Reset
    setAmount("");
    setDescription("");
  };

  return (
    <div className="create-transaction-wrapper">
      <div className="transaction-form-wrapper">
        <p className="top-of-transaction-form">Enter Transactions Details</p>
        <form className="transaction-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Amount:</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="transaction-input"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
              required
              min={1}
            />
          </div>
          <div className="input-wrapper">
            <label>Type:</label>
            <select
              className="transaction-input"
              name="type"
              value={props.type}
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
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              required
              minLength={5}
            />
          </div>
          <div className="add-transaction-footer">
            <div className="transaction-actions">
              <button type="submit">Enter</button>
            </div>
            <div className="transaction-actions">
              <Link to="/transactions">View all transactions</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
