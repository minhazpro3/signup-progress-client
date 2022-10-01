import React from "react";
import { useForm } from "react-hook-form";

const Form_2 = ({
  submitData,
  setCurrentState,
  currentState,
  setFormData2,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data) {
      setCurrentState(currentState + 1);
      setFormData2(data);
    }
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="">First Name *</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg"
          {...register("firstName")}
          type="text"
          required
          placeholder="First Name"
        />
        <br />
        <label className="">Last Name *</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg "
          {...register("lastName")}
          type="text"
          required
          placeholder="Last Name"
        />
        <br />
        <label className="">Contact No *</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg "
          {...register("contact_1")}
          type="text"
          required
          placeholder="Contact No"
        />
        <br />
        <label className="">Alternate Contact No*</label>
        <br />
        <input
          className="w-96  my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg"
          {...register("contact_2")}
          type="twxt"
          required
          placeholder="Alternate Contact No"
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

export default Form_2;
