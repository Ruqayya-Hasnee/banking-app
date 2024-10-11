import { useEffect, useState } from "react";
import "./dashboard.css";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  const [accountCount, setAccountCount] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);
  
  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("accounts"))
    const transactions = JSON.parse(localStorage.getItem("transactions"))
    setAccountCount(accounts?.length ?? 0)
    setTransactionCount(transactions?.length ?? 0)
  }, [])

  return (
    <div className="dashboard-wrapper">
      <StatsCard title="accounts" viewAllLink="/accounts" createLink="/accounts/create" count={accountCount} />
      <StatsCard title="transactions" viewAllLink="/transactions" count={transactionCount} />
    </div>
  );
};
export default Dashboard;
