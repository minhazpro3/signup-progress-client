import React from "react";
import { useForm } from "react-hook-form";

const Form_1 = ({
  submitData,
  setCurrentState,
  currentState,
  setFormData1,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.pass_1 === data.pass_2) {
      setCurrentState(currentState + 1);
      setFormData1(data);
    }
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="">Email *</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg"
          {...register("email")}
          type="email"
          required
          placeholder="Email ID"
        />
        <br />
        <label className="">User Name *</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg "
          {...register("name")}
          type="text"
          required
          placeholder="User Name"
        />
        <br />
        <label className="">Password *</label>
        <br />
        <input
          className="w-96 my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg "
          {...register("pass_1")}
          type="password"
          required
          placeholder="Password"
        />
        <br />
        <label className="">Confirm Password *</label>
        <br />
        <input
          className="w-96  my-4 px-2 outline-none py-2 border-2 border-gray-200 rounded-lg"
          {...register("pass_2")}
          type="password"
          required
          placeholder="Confirm Password"
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

export default Form_1;
