import React, { useEffect, useRef } from "react";
import ResponseCard from "./ResponseCard";
import OptionInput from "./OptionInput";
import Loading from "./Loading";
import EmaiWriterInput from "./EmaiWriterInput";

const Chats = ({
  conversations,
  activeThread,
  inputValues,
  setInputValues,
  followup,
  setFollowup,
}) => {
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollableContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [conversations]);
  console.log(activeThread, "activeThread");
  return (
    <div
      ref={scrollableContainerRef}
      className="flex flex-col py-6 w-full grow max-h-full noscrollbarstyle overflow-y-scroll"
    >
      {/* {Object.keys(conversations).length === 0 &&
        (activeThread?.mind === "Researcher" ||
          activeThread?.mind === "Strategist") && (
          <OptionInput role={activeThread?.mind} />
        )} */}

      {Object.entries(conversations)?.map(([key, convo]) => {
        return (
          <>
            <ResponseCard
              followup={followup}
              initial={"RS"}
              isGenesis={false}
              text={
                activeThread?.chats?.length > 0
                  ? activeThread?.chats[0]?.objective
                  : convo?.query
              }
              mind={activeThread?.mind}
              activeThread={activeThread}
            />
            {!convo?.loading ? (
              convo?.answer && (
                <ResponseCard
                  followup={followup}
                  initial={" MU"}
                  isGenesis={true}
                  text={convo?.answer}
                  mind={activeThread?.mind}
                  inputValues={inputValues}
                />
              )
            ) : (
              <Loading />
            )}
          </>
        );
      })}
      <EmaiWriterInput
        setFollowup={setFollowup}
        followup={followup}
        activeThread={activeThread}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    </div>
  );
};

export default Chats;
