import React from 'react'
import Header from '../Components/Header/Header'
import ServicesComponents from '../Components/ServicesComponents'

export const Services = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
    <Header title={"Services"}/>
    <div className="flex gap-8  ms-10 ">
      <ServicesComponents />
    </div>
    
  </div>
  )
}
