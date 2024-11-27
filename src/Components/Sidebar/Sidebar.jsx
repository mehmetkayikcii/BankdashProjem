import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  ArrowRightLeft,
  ChartNoAxesCombined,
  CreditCard,
  HandCoins,
  House,
  Lightbulb,
  Settings,
  UserRound,
  Wrench,
} from "lucide-react";

function Sidebar() {
  return (
    <nav>
      <div
        style={{ width: "250px" }}
        className="h-full text-blue-900 text-center bg-white"
      >
        <div
          style={{ height: "101px" }}
          className="flex  gap-1 items-center ml-5"
        >
          <img src={logo} alt="Logo" className="" />
          <h3 className="font-semibold">BankDash.</h3>
        </div>
        <ul>
          <li>
            <NavLink exact to="/" className={`flex gap-2 m-8`}>
              <House />
              <div>
                <p className="font-semibold">Dashboard</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/transactions" className={`flex gap-2 m-8`}>
              <ArrowRightLeft />
              <div>
                <p className="font-semibold">Transactions</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/accounts" className={`flex gap-2 m-8`}>
              <UserRound />
              <div>
                <p className="font-semibold">Accounts</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/invesments" className={`flex gap-2 m-8`}>
              <ChartNoAxesCombined />
              <div>
                <p className="font-semibold">Investments</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/creditCards" className={`flex gap-2 m-8`}>
              <CreditCard />
              <div>
                <p className="font-semibold">Credit Cards</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/loans" className={`flex gap-2 m-8`}>
              <HandCoins />
              <div>
                <p className="font-semibold">Loans</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={`flex gap-2 m-8`}>
              <Wrench />
              <div>
                <p className="font-semibold">Services</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/myPrivileges" className={`flex gap-2 m-8`}>
              <Lightbulb />
              <div>
                <p className="font-semibold">My Privileges</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting" className={`flex gap-2 m-8`}>
              <Settings />
              <div>
                <p className="font-semibold">Setting</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
