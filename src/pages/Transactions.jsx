import React from 'react'
import MyCards from '../Components/MyCardsComponent/MyCards'
import Header from '../Components/Header/Header'
import MyExpense from '../Components/MyExpense/MyExpense'
import RecentTransactions from '../Components/RecentTransactions/RecentTransactions'

const Transactions = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
          <Header title={"Transaction"}/>
          <div className="flex gap-8  ms-10 ">
            <MyCards addCard={"+ Add Card"}/>
            <MyExpense/>
          </div>
          <RecentTransactions/>
          
        </div>
  )
}

export default Transactions