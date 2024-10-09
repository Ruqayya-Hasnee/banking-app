import "./dashboard.css";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <StatsCard title="accounts" viewAllLink="/accounts" createLink="/accounts/create"/>
      <StatsCard title="transactions" viewAllLink="/transactions"/>
    </div>
  );
};
export default Dashboard;
