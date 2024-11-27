import React from 'react'
import Header from "../Components/Header/Header.jsx";
import MyCards from "../Components/MyCardsComponent/MyCards.jsx";
import RecentTransaction from "../Components/RecentTransactionComponents/RecentTransaction.jsx";
import WeeklyActivity from "../Components/WeeklyActivityComponent/WeeklyActivity.jsx";
import ExpenseStatistics from "../Components/ExpenseStatisticsComponent/ExpenseStatistics.jsx";
import BalanceHistory from "../Components/BalanceHistoryComponent/BalanceHistory.jsx";
import QuickTransfer from "../Components/QuickTransferComponent/QuickTransfer.jsx";


const Dashboard = () => {
  return (
        <div className="flex flex-col gap-2 w-full">
          <Header title={"Overwiev"}/>
          <div className="flex gap-8  ms-10 ">
            <MyCards addCard={"See All"}/>
            <RecentTransaction/>
          </div>
          <div className="flex gap-8 ms-10 mt-3">
            <WeeklyActivity /> 
            <ExpenseStatistics />
          </div>
          <div className="flex gap-8 ms-10 mt-3">
            <QuickTransfer /> 
            <BalanceHistory />
          </div>
        </div>
  )
}

export default Dashboard