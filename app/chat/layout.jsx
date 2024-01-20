"use client";
import React from "react";
import LeftPanel from "./components/LeftPanel";
import "./Main.css";
import ChooseRole from "./components/ChatPanel/ChooseRole";
import ChatScreen from "./components/ChatPanel/ChatScreen";
import { useAuthStateChange } from "../hooks/useAuthStateChange";
import { useAppSelector } from "../store";

const ChatLayout = () => {
  useAuthStateChange();
  const uuid = useAppSelector((state) => state.authentication.uuid);
  const activeThread = useAppSelector((state) => state.converSationPanel);

  console.log(activeThread, "activeThread", uuid);

  return (
    <div className="w-screen h-screen max-h-screen overflow-hidden flex main-container">
      <div className="w-[20%] h-screen overflow-hidden  ">
        <LeftPanel />
      </div>
      <div className="max-w-[80%] grow h-full overflow-y-hidden max-h-full bg-[#f4f4f4]">
        {activeThread.mind === "" ? (
          <ChooseRole activeThread={activeThread} />
        ) : (
          <ChatScreen activeThread={activeThread} />
        )}
        {/* <ChooseRole /> */}
      </div>
    </div>
  );
};

export default ChatLayout;
