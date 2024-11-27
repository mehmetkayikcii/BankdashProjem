import React from "react";

const AddNewCard = () => {
  return (
    <div>
      <h3 className="p-5 text-blue-900 font-bold">Add New Card</h3>

      <div className="bg-white text-gray-500 font-semibold rounded-2xl w-[730px] p-9 !pb-5">
        <p>
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <div className="w-[670px] p-5">
          <div className="flex justify-between">
            <div>
            <div className="text-black">Card Type</div>
            <input type="text" placeholder="Classic" className="border-2 rounded-lg p-3"/>
            </div>
            <div>
                <div className="text-black">Name On Card</div>
                <input type="text" placeholder="My Cards" className="border-2 rounded-lg p-3"/>
            </div>
          </div>
          <br />
          <div className="flex justify-between ">
            <div>
                <div className="text-black">Card Number</div>
                <input type="text" placeholder="**** **** **** ****" className="border-2 rounded-lg p-3"/>
            </div>
            <div>
                <div className="text-black">Expiration Date</div>
                <input type="text" placeholder="25 January 2025" className="border-2 rounded-lg p-3"/>
            </div>
          </div>
          <br />
          <button className="bg-blue-800 p-4 pl-10 pr-10 text-white rounded-2xl">Add Card</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
