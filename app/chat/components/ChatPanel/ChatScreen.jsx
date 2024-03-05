import React, { useState } from "react";
import InputField from "./InputField";
import Chats from "./Chats";

const ChatScreen = ({ activeThread }) => {
  const [inputValues, setInputValues] = useState({
    theme: "",
    targetAudience: "",
    product: "",
    specialOffer: "",
    emailSeqNumber: "",
    project: "",
    product: "",
    earlier_email: "",
    industry: "",
    keywords: [],
  });
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [followup, setFollowup] = useState(false);
  const [siantoggle, setSiantoggle] = useState("watsapp");
  const [adsOrArticle, setAdsOrArticle] = useState(false);

  console.log(inputValues, "inputValues");

  const handleKeywordChange = (event) => {
    setCurrentKeyword(event.target.value);
  };

  const addKeyword = (e) => {
    e.preventDefault();
    if (currentKeyword.trim() !== "") {
      setInputValues((prev) => ({
        ...prev,
        keywords: [...prev.keywords, currentKeyword.trim()],
      }));
      setCurrentKeyword("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addKeyword(event);
    }
  };
  const handleDeleteKeyword = (index) => {
    setInputValues((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index),
    }));
  };

  function getTimeGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  return (
    <div className="flex  py-6   flex-col h-full max-h-screen overflow-y-hidden space-y-4">
      <h2 className="font-medium text-purple-500 text-3xl px-12 ">
        Hey There! {getTimeGreeting()}
      </h2>
      <div className="flex items-center justify-center">
        <h3 className="underline underline-offset-2 font-semibold text-xl">
          {activeThread?.mind}
        </h3>
      </div>
      <div className="grow flex flex-col overflow-y-hidden max-h-full h-full">
        <Chats
          handleDeleteKeyword={handleDeleteKeyword}
          currentKeyword={currentKeyword}
          handleKeywordChange={handleKeywordChange}
          handleKeyPress={handleKeyPress}
          addKeyword={addKeyword}
          siantoggle={siantoggle}
          setSiantoggle={setSiantoggle}
          setFollowup={setFollowup}
          followup={followup}
          inputValues={inputValues}
          setInputValues={setInputValues}
          conversations={activeThread?.chats}
          activeThread={activeThread}
          adsOrArticle={adsOrArticle}
          setAdsOrArticle={setAdsOrArticle}
        />
      </div>
      <InputField
        adsOrArticle={adsOrArticle}
        setAdsOrArticle={setAdsOrArticle}
        setSiantoggle={setSiantoggle}
        siantoggle={siantoggle}
        followup={followup}
        activeThread={activeThread}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    </div>
  );
};

export default ChatScreen;
