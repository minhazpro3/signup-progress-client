/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import "./App.css";
import Form_1 from "./components/Form_1";
import Form_2 from "./components/Form_2";
import Form_3 from "./components/Form_3";
import Progress_sec from "./components/Progress_sec";
import Success from "./components/Success";

function App() {
  const [currentState, setCurrentState] = useState(0);
  console.log(currentState);

  const buttonAvailable = () => {
    // setCurrentState(currentState+1)
  };

  const previous = () => {
    
  }

  return (
    <div className="container mx-auto px-8 md:px-0 flex justify-center">
      <div className="w-5/6">
        <Progress_sec />
        {currentState === 0 ? (
          <Form_1
            buttonAvailable={buttonAvailable}
            setCurrentState={setCurrentState}
            currentState={currentState}
          />
        ) : currentState === 1 ? (
          <Form_2
            buttonAvailable={buttonAvailable}
            setCurrentState={setCurrentState}
            currentState={currentState}
          />
        ) : currentState === 2 ? (
          <Form_3
            buttonAvailable={buttonAvailable}
            setCurrentState={setCurrentState}
            currentState={currentState}
          />
        ) : currentState === 3 ? (
          <Success
            buttonAvailable={buttonAvailable}
            setCurrentState={setCurrentState}
            currentState={currentState}
          />
        ) : null}
        <div className="flex justify-center">
          <button className="w-96 py-2 bg-green-600 cursor-pointer font-medium text-white my-3"
          >Previous</button>
        </div>
      </div>
    </div>
  );
}

export default App;
