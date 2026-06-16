import { getDataForForm } from "@/Actions/User.action";
import React, { useActionState } from "react";

function ActionStateEx() {
  // useFormState
  const [data, func] = useActionState(getDataForForm, {
    message: "",
    success: false,
  });
  return (
    <div className="w-full flex flex-col">
      <div className="w-full min-h-screen flex justify-center items-center">
        <form
          action={func}
          className="w-7/12 border p-8 rounded-md flex flex-col gap-4"
        >
          <input
            name="myName"
            className="py-2 w-full rounded-md border focus:outline-0"
            type="text"
            placeholder="Enter your name"
          />
          <input
            name="email"
            className="py-2 w-full rounded-md border focus:outline-0"
            type="email"
            placeholder="Enter your email"
          />
          <button
            className="py-2 w-full bg-linear-60 from-blue-500 to-purple-600 text-stone-100"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
      {data.success && (
        <div>
          <h1 className="text-5xl text-bold text-center">{data.message}</h1>
        </div>
      )}
    </div>
  );
}

export default ActionStateEx;
