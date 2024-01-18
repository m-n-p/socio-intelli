import React, { useState } from "react";
import InputField from "./InputField";
import Chats from "./Chats";

const ChatScreen = ({ activeThread }) => {
  console.log(activeThread, "in shit");
  const [inputValues, setInputValues] = useState({
    theme: "",
    targetAudience: "",
    product: "",
    specialOffer: "",
    emailSeqNumber: "",
  });
  console.log(inputValues, "value inscreen");
  return (
    <div className="flex text-white py-6   flex-col h-full max-h-screen overflow-y-hidden space-y-4">
      <h2 className="adventfont text-2xl px-12">Hey Rohith! Good Afternoon</h2>
      <div className="flex items-center justify-center">
        <h3 className="underline underline-offset-2 font-semibold text-xl">
          {activeThread?.mind}
        </h3>
      </div>
      <div className="grow flex flex-col overflow-y-hidden max-h-full h-full">
        <Chats
          inputValues={inputValues}
          setInputValues={setInputValues}
          conversations={activeThread?.chats}
          activeThread={activeThread}
        />
      </div>
      <InputField activeThread={activeThread} />
    </div>
  );
};

export default ChatScreen;
