import React from "react";

const Success = ({ submitData, setCurrentState, currentState }) => {
  
  return (
      <div className=" flex justify-center items-center my-10">
          <div className="my-16">
          <h3 className=" uppercase text-3xl font-semibold  text-center">Success!</h3>
      <h4 className=" text-xl font-medium text-center">You have <br/>Successfully <br/> Signup</h4>
     </div>
    </div>
  );
};

export default Success;
