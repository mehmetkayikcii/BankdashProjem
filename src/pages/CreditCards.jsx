import React from 'react'
import Header from '../Components/Header/Header'
import CreditCardsComponents from '../Components/CreditCardsComponents'

const CreditCards = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
    <Header title={"Credit Cards"}/>
    <div className="flex gap-8  ms-10 ">
      <CreditCardsComponents />
    </div>
  </div>
  )
}

export default CreditCards