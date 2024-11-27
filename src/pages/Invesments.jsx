import React from 'react'
import Header from '../Components/Header/Header'
import InvesmentsComponents from '../Components/InvesmentsComponents'
import YearlyTotalInvesment from '../Components/YearlyTotalInvesment/YearlyTotalInvesment'
import MontlyRevenue from '../Components/MontlyRevenue/MontlyRevenue'
import MyInvestments from '../Components/MyInvestments/MyInvestments'
import TrendingStock from '../Components/TrendingStock/TrendingStock'

const Invesments = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
    <Header title={"Invesments"}/>
    <div className="ms-10 ">
        <InvesmentsComponents />
        <div className='ms-5 flex gap-6'>
        <YearlyTotalInvesment />
        <MontlyRevenue />  
        </div>
        <div className='ms-5 flex gap-6'>
        <MyInvestments />
        <TrendingStock />
        </div>
    </div>
    
  </div>
  )
}

export default Invesments