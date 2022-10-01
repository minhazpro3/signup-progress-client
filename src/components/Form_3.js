/* eslint-disable no-mixed-operators */
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form_3 = ({
  submitData,
  setCurrentState,
  currentState,
  setFormData3,
  formData3,
}) => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data) {
      submitData();
    }
  };

  const upload_img = () => {
    setFormData3({ url1: imgUrl, url2: imgUrl2 });
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
        console.log(res.data.data.url);
      })
      .catch((error) => {});
  };
  // image setUrl 2
  const setImage2 = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("key", "a8859d2230e61a23e842e4132855a72d");
    formData.append("image", e.target.files[0]);

    if (imgUrl) {
      axios
        .post("https://api.imgbb.com/1/upload", formData)
        .then((res) => {
          setImgUrl2(res.data.data.url);
        })
        .catch((error) => {});
    }
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
          accept="image"
          onChange={setImage}
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
          onChange={setImage2}
          required
        />
        <br />
        {imgUrl2 ? (
          <button onClick={upload_img} className="bg-green-500 px-4 py-2 my-4 w-96 text-white font-medium">
            Submit
          </button>
        ) : null}
        <br />

        {/* <input
          disabled={formData3.length > 1 ? true : false}
          className="w-96 py-2 bg-green-600 cursor-pointer font-medium text-white my-6"
          type="submit"
          value="Next"
        /> */}
      </form>
    </div>
  );
};

export default Form_3;
