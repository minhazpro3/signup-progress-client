/* eslint-disable react/jsx-pascal-case */
import axios from "axios";
import { useState } from "react";
import "./App.css";
import Direction from "./components/Direction";
import Form_1 from "./components/Form_1";
import Form_2 from "./components/Form_2";
import Form_3 from "./components/Form_3";
import Progress_sec from "./components/Progress_sec";
import Success from "./components/Success";

function App() {
  const [currentState, setCurrentState] = useState(0);
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});
  const [formData3, setFormData3] = useState([]);

 

  const submitData = () => {
    const formData = {
      email: formData1.email,
      userName: formData1.name,
      pass: formData1.pass_1,
      firstName: formData2.firstName,
      lastName: formData2.lastName,
      contact_1: formData2.contact_1,
      contact_2: formData2.contact_2,
      profile: formData3.url1,
      signature: formData3.url2,
    };



    axios.post("https://radiant-brook-39681.herokuapp.com/saveUsers", formData).then((res) => {
      if (res.data.acknowledged) {
        setCurrentState(currentState + 1);
        alert("Signup successful!")
      }
    });
  };

  const prev = () => {
    setCurrentState(currentState - 1);
  };

  return (
    <div className="container mx-auto px-8 md:px-0 flex justify-center my-16">
      <div className="w-5/6">
        <Progress_sec currentState={currentState} />
        <Direction currentState={currentState} />
        {currentState === 0 ? (
          <Form_1
            submitData={submitData}
            setCurrentState={setCurrentState}
            currentState={currentState}
            setFormData1={setFormData1}
          />
        ) : currentState === 1 ? (
          <Form_2
            submitData={submitData}
            setCurrentState={setCurrentState}
            currentState={currentState}
            setFormData2={setFormData2}
          />
        ) : currentState === 2 ? (
          <Form_3
            submitData={submitData}
            setCurrentState={setCurrentState}
            currentState={currentState}
            setFormData3={setFormData3}
            formData3={formData3}
          />
        ) : currentState === 3 ? (
          <Success
            submitData={submitData}
            setCurrentState={setCurrentState}
            currentState={currentState}
          />
        ) : null}
        <div className="flex justify-center">
          <button
            disabled={currentState === 0 ? true : false}
            onClick={prev}
            className="w-96 py-2 bg-green-600 cursor-pointer font-medium text-white my-3"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
