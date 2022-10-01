import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form_3 = ({ buttonAvailable, setCurrentState, currentState }) => {
    const [imgUrl, setImgUrl]=useState("")
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data) {
        console.log(data);
        setCurrentState(currentState+1)
    }
    };
    
    



  const setImage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("key", "a8859d2230e61a23e842e4132855a72d");
    formData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((res) => {
        setImgUrl(res.data.data.url);
      })
      .catch((error) => {});
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="">Upload Your Photo*</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg"
          {...register("photo")}
          type="file"
          required
        />
        <br />
        <label className="">Upload Your Signature *</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg "
          {...register("signature")}
                  type="file"
                  accept="image"
                  onChange={setImage}
          required
        />
        <br />

              <input
                 
          className="w-96 py-2 bg-green-600 cursor-pointer font-medium text-white my-3"
                  type="submit"
                  value="Next"
        />
      </form>
    </div>
  );
};

export default Form_3;
