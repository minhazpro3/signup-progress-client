import React from "react";

const Progress_sec = ({ currentState }) => {
  return (
    <div>
      <div className="my-6">
        <h2 className="text-3xl font-medium text-center uppercase ">
          Sign up your account
        </h2>
        <h2 className="text-base font-medium text-center  ">
          Fill all form field to go to next step
        </h2>
      </div>
      {/* progress  */}
      <div>
        <div>
          <div className=" w-full flex justify-center ">
            <div className=" flex justify-between gap-20  ">
              <div className="relative z-20">
                <div
                  className={
                    currentState === 0 || 1 || 2 || 3
                      ? "border-2 bg-green-600 rounded-full border-green-600 w-12 h-12 px-3 py-2"
                      : " border-2 bg-white rounded-full border-gray-300 w-12 h-12 px-3 py-2 "
                  }
                >
                  🔒
                </div>
                <h4>Account</h4>
              </div>
              <div className="relative z-20">
                <div
                  className={
                    currentState >= 1
                      ? "border-2 bg-green-600 rounded-full border-green-600 w-12 h-12 px-3 py-2"
                      : " border-2 bg-white rounded-full border-gray-300 w-12 h-12 px-3 py-2 "
                  }
                >
                  👤
                </div>
                <h4>Personal</h4>
              </div>
              <div className="relative z-20">
                <div
                  className={
                    currentState >= 2
                      ? "border-2 bg-green-600 rounded-full border-green-600 w-12 h-12 px-3 py-2"
                      : " border-2 bg-white rounded-full border-gray-300 w-12 h-12 px-3 py-2 "
                  }
                >
                  📷
                </div>
                <h4>Image</h4>
              </div>
              <div className="relative z-20">
                <div
                  className={
                    currentState >= 3
                      ? "border-2 bg-green-600 rounded-full border-green-600 w-12 h-12 px-3 py-2"
                      : " border-2 bg-white rounded-full border-gray-300 w-12 h-12 px-3 py-2 "
                  }
                >
                  ✔️
                </div>
                <h4>Finish</h4>
              </div>
            </div>
          </div>
          <div className="  flex justify-between ">
            <div
              className={
                currentState === 0
                  ? `border-green-600 absolute ml-[246px] -mt-12 border-t-4 w-[9rem]  z-10 h-2`
                  : currentState === 1
                  ? `border-green-600 absolute ml-[246px] -mt-12 border-t-4 w-[18rem]  z-10 h-2`
                  : currentState === 2
                  ? `border-green-600 absolute ml-[246px] -mt-12 border-t-4 w-[27rem]  z-10 h-2`
                  : currentState === 3
                  ? `border-green-600 absolute ml-[246px] -mt-12 border-t-4 w-[36rem]  z-10 h-2`
                  : ` `
              }
            ></div>
          </div>
          <div className="  flex justify-center    ">
            <div className="absolute -mt-12 border-t-4 border-gray-300 w-[36rem] h-2"></div>
          </div>
        </div>
        <div className="container flex justify-center  my-6">
          <div className=" w-[36rem] bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center py-2 leading-none rounded-full"
              style={
                currentState === 0
                  ? { width: "25%" }
                  : currentState === 1
                  ? { width: "50%" }
                  : currentState === 2
                  ? { width: "75%" }
                  : currentState === 3
                  ? { width: "100%" }
                  : ""
              }
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress_sec;
