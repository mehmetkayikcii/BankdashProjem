import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.jsx"; 
import Dashboard from "./pages/Dashboard.jsx";
import Transactions from "./pages/Transactions.jsx";
import Accounts from "./pages/Accounts.jsx";
import Invesments from "./pages/Invesments.jsx";
import Setting from "./pages/Setting.jsx";
import MyPrivileges from "./pages/MyPrivileges.jsx";
import  {Services}  from "./pages/Services.jsx";
import Loans from "./pages/Loans.jsx";
import CreditCards from "./pages/CreditCards.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/invesments" element={<Invesments />} />
            <Route path="/creditCards" element={<CreditCards />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/myPrivileges" element={<MyPrivileges />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
