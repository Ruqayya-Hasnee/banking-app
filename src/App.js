import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Accounts from "./components/accounts/Accounts";
import Transactions from "./components/transactions/Transactions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./components/accounts/CreateAccount";
import NotFound from "./components/notFound/NotFound";
import Deposit from "./components/accounts/Deposit";
import Withdraw from "./components/accounts/Withdraw";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/accounts" Component={Accounts} />
        <Route path="/transactions" Component={Transactions} />
        <Route path="/accounts/create" Component={CreateAccount} />
        <Route path="/accounts/:accountId/deposit"  Component={Deposit}/>
        <Route path="/accounts/:accountId/withdraw" Component={Withdraw} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
