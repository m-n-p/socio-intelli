import React from "react";
import { useAppDispatch } from "../../store";
import { createNewThread } from "./ChatPanel/reducers";

const AddButton = () => {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(createNewThread());
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-5 px-8 bg-purple-500 w-10/12 rounded-lg font-semibold text-xl py-3"
    >
      <span> + </span>
      <span>New Tab</span>
    </button>
  );
};

export default AddButton;
