import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded p-4 shadow-md dark:gray-900 duration-200 w-[300px]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-black">Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer text-black"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* Frm Section */}

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border mb-4 border-gray-300 rounded-full py-1 px-2 focus:outline-none focus:border-primary dark:border-gray-300 dark:bg-gray-800 "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border mb-4 border-gray-300 rounded-full py-1 px-2 focus:outline-none focus:border-primary dark:border-gray-300 dark:bg-gray-800"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border mb-4 border-gray-300 rounded-full py-1 px-2 focus:outline-none focus:border-primary dark:border-gray-300 dark:bg-gray-800"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
