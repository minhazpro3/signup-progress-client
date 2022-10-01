import React from "react";

const Success = ({ submitData, setCurrentState, currentState }) => {
  
  return (
      <div className=" flex justify-center items-center">
          <div>
          <h3 className=" uppercase text-3xl font-semibold">Success</h3>
      <h4 className=" text-xl font-medium">You have <br/>Successfully <br/> Signup</h4>
     </div>
    </div>
  );
};

export default Success;
