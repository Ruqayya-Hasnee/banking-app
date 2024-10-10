import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Accounts from "./components/accounts/Accounts";
import Transactions from "./components/transactions/Transactions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./components/accounts/CreateAccount";
import NotFound from "./components/notFound/NotFound";
import Transaction from "./components/transaction/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/accounts" Component={Accounts} />
        <Route path="/transactions" Component={Transactions} />
        <Route path="/accounts/create" Component={CreateAccount} />
        <Route
          path="/accounts/:accountId/deposit"
          Component={() => <Transaction type="DEPOSIT" />}
        />
        <Route
          path="/accounts/:accountId/withdraw"
          Component={() => <Transaction type="WITHDRAW" />}
        />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
