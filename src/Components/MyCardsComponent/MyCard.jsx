import React from 'react'
import SubComponent3 from './SubComponent3'


const MyCard = () => {
  return (
    <div className='w-[350px] h-[282px]'>
      <div className="flex justify-between p-5 !pt-0 text-blue-900 font-semibold ">
        <p>My Cards</p>
        <a href="a">See All</a>
      </div>
      <SubComponent3 />
    </div>
  )
}

export default MyCard