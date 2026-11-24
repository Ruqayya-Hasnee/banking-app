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
        <div className="transaction-spatial-panel" aria-hidden="true">
          <div className="spatial-orb spatial-orb-one"></div>
          <div className="spatial-orb spatial-orb-two"></div>
          <div className="spatial-stack">
            <div className="spatial-card spatial-card-back"></div>
            <div className="spatial-card spatial-card-front">
              <span>ACCOUNT</span>
              <strong>•••• {String(params.accountId).slice(-4)}</strong>
            </div>
          </div>
        </div>
        <div className="transaction-form-content">
          <div className="top-of-transaction-form">
            <span className={`transaction-type-badge ${props.type.toLowerCase()}`}>
              {props.type}
            </span>
            <div>
              <p>Transaction</p>
              <h1>{props.type === "DEPOSIT" ? "Add funds" : "Withdraw funds"}</h1>
            </div>
          </div>
          <form className="transaction-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="transactionAmount">Amount</label>
              <div className="transaction-input-shell">
                <span>$</span>
                <input
                  id="transactionAmount"
                  type="number"
                  placeholder="0.00"
                  className="transaction-input"
                  name="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  required
                  min={1}
                />
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="transactionType">Type</label>
              <select
                id="transactionType"
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
              <label htmlFor="transactionDescription">Description</label>
              <input
                id="transactionDescription"
                type="text"
                placeholder="What is this for?"
                className="transaction-input"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                required
                minLength={5}
              />
            </div>
            <div className="add-transaction-footer">
              <Link className="transaction-secondary-action" to="/transactions">
                View all
              </Link>
              <button className="transaction-primary-action" type="submit">
                <span>{props.type === "DEPOSIT" ? "Add funds" : "Withdraw"}</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
