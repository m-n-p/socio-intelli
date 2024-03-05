/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch } from "react-redux";
import { selectRole } from "../ConversationPanel/reducers";
import { useAppSelector } from "../../../store";
import { createNewThread, switchActiveThread } from "./reducers";

const Role = ({ image, heading, handleClick, value }) => {
  return (
    <div
      onClick={() => handleClick(value)}
      className="flex hover:shadow-xl p-6 shadow-white hover:text-purple-500 cursor-pointer flex-col space-y-4 items-center justify-center"
    >
      <img src={image} alt="image" className="h-36" />
      <h3 className="text-3xl ">{heading}</h3>
    </div>
  );
};

const ChooseRole = ({ activeThread }) => {
  const dispatch = useDispatch();
  const { activeThread: activeThreadId } = useAppSelector(
    (state) => state.converSationPanel
  );

  function handleClick(value) {
    if (!activeThreadId) {
      dispatch(createNewThread());
      dispatch(switchActiveThread("newThread"));
    }
    dispatch(selectRole(value));
  }

  return (
    <div className="w-full h-full flex flex-col items-center adventfont justify-center space-y-20 ">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl">Hey Rohith Good Afternoon</h2>
        <p className="text-3xl font-semibold text-purple-500">
          What Role are we playing now?
        </p>
      </div>
      <div className="flex justify-between px-12  space-x-36">
        <Role
          handleClick={handleClick}
          image={"/engines/email.png"}
          heading={"Email-Writer"}
          value={"Email-Writer"}
        />
        <Role
          handleClick={handleClick}
          image={"/engines/linkedin.png"}
          heading={"Linkedin-Twitter-Writer"}
          value={"Linkedin-Twitter-Writer"}
        />
        <Role
          handleClick={handleClick}
          image={"/engines/blog.png"}
          heading={"Article + Google Ads"}
          value="Blog-Article-Writer"
        />
      </div>
    </div>
  );
};

export default ChooseRole;
