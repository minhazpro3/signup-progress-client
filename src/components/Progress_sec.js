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
                <h4
                  className={
                    currentState === 0 || 1 || 2 || 3
                      ? "text-green-600 font-semibold"
                      : ""
                  }
                >
                  Account
                </h4>
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
                <h4
                  className={
                    currentState >= 1 ? "text-green-600 font-semibold" : ""
                  }
                >
                  Personal
                </h4>
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
                <h4
                  className={
                    currentState >= 2 ? "text-green-600 font-semibold" : ""
                  }
                >
                  Image
                </h4>
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
                <h4
                  className={
                    currentState >= 3 ? "text-green-600 font-semibold" : ""
                  }
                >
                  Finish
                </h4>
              </div>
            </div>
          </div>
          <div className=" absolute -mt-12 left-2/4 transform -translate-x-2/4 w-[36rem]  rounded-full dark:bg-gray-700 mx-auto">
            <div
              className="  text-xs font-medium   text-blue-100 text-center py-[2px] leading-none rounded-full"
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
          
          <div className=" absolute -mt-12 left-2/4 transform -translate-x-2/4 w-[36rem] bg-gray-200 rounded-full dark:bg-gray-700 mx-auto">
            <div
              className="bg-[#16A34A] text-xs font-medium  text-blue-100 text-center py-[2px] leading-none rounded-full"
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
