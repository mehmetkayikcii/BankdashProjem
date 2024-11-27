import React from 'react'
import Header from '../Components/Header/Header'
import AccountsComponents from '../Components/AccountsComponents'

const Accounts = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
    <Header title={"Accounts"}/>
    <div className="ms-10 ">
      <AccountsComponents />
    </div>
    
  </div>
  )
}

export default Accounts