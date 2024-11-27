import React from 'react'

const SubComponent3 = () => {
  return (
    <div className="flex justify-between overflow-x-auto ">
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white rounded-2xl ">
    <div style={{ width: "350px", height: "165px" }}>
      <div className="flex justify-between p-5">
        <div>
          <p className="text-xs">Balance</p>
          <p className="font-semibold">$5,756</p>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2.6em" height="2.6em" viewBox="0 0 26 26"><path fill="currentColor" d="M5.813 2C2.647 2 0 4.648 0 7.813v10.375C0 21.352 2.648 24 5.813 24h14.375C23.352 24 26 21.352 26 18.187V7.813C26 4.649 23.352 2 20.187 2zm0 2h14.375C22.223 4 24 5.777 24 7.813V9h-6c-.555 0-1-.445-1-1s.445-1 1-1a1 1 0 1 0 0-2c-1.645 0-3 1.355-3 3c0 1.292.844 2.394 2 2.813v4.968c-1.198.814-2 2.18-2 3.719c0 .923.293 1.781.781 2.5H10.22a4.44 4.44 0 0 0 .78-2.5c0-1.538-.802-2.905-2-3.719v-4.969c1.156-.418 2-1.52 2-2.812c0-1.645-1.355-3-3-3H6a1 1 0 0 0-.094 0a1 1 0 0 0-.093 0A1.004 1.004 0 0 0 6 7h2c.555 0 1 .445 1 1s-.445 1-1 1H2V7.812C2 5.777 3.777 4 5.813 4M2 11h5v4H2zm17 0h5v4h-5zM2 17h4.5C7.839 17 9 18.161 9 19.5S7.839 22 6.5 22h-.688C3.777 22 2 20.223 2 18.187zm17.5 0H24v1.188C24 20.223 22.223 22 20.187 22H19.5c-1.339 0-2.5-1.161-2.5-2.5s1.161-2.5 2.5-2.5"></path></svg>
        </div>
      </div>

      <div className="flex justify-between pl-5 pr-20">
        <div>
          <p className="text-xs">CARD HOLDER</p>
          <p className="font-semibold">Eddy Cusuma</p>
        </div>
        <div>
          <p className="text-xs ">VALID THRU</p>
          <p className="font-semibold ">12/22</p>
        </div>
      </div>
    </div>
    <div
      style={{ width: "350px", height: "75px" }}
      className="flex justify-between  bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600  rounded-br-2xl rounded-bl-2xl p-4"
    >
      <div>
        <p className=" text-2xl">3778 **** **** 1234</p>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="2.6em" height="2.6em" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd"><circle cx={7} cy={12} r={7}></circle><circle cx={17} cy={12} r={7} fillOpacity={0.8}></circle></g></svg>
      </div>
    </div>
  </div>
    </div>
  )
}

export default SubComponent3