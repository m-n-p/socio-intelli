import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import getGetCurrentThread from "./actions/getCurrentThread";
import { switchActiveThread } from "./reducers";

const QuestionsList = () => {
  const { userInfo, threads } = useAppSelector((state) => state.chatPanel);
  const activeThread = useAppSelector((state) => state.chatPanel.activeThread);
  const dispatch = useAppDispatch();
  function handleThreadClick(conversationId) {
    dispatch(switchActiveThread(conversationId));
    dispatch(getGetCurrentThread({ conversationId }));
  }

  console.log(threads, "new threasd");

  function determineColor(mind) {
    if (!mind) return "#0A7008";
    let checkMindColor = mind.toLowerCase();
    console.log(checkMindColor);
    switch (checkMindColor) {
      case "etx":
        return "#E90E0E";
      case "agmv":
        return "#DCB21B";
      case "researcher":
        return "#1B68DC";
      case "":
        return "#0A7008";
    }
  }
  console.log(threads, "  threads");
  return (
    <div className="flex flex-col space-y-2 grow h-full noscrollbarstyle overflow-y-scroll py-5">
      {threads?.length > 0 &&
        threads?.map((convo, index) => {
          console.log(convo, "convo");
          return (
            convo?.thread?.length > 0 && (
              <div
                key={index}
                onClick={() => handleThreadClick(convo.conversation_id)}
                className={
                  "w-full flex py-2 px-1 rounded-md cursor-pointer hover:bg-purple-400 hover:text-white text-black items-center space-x-2 " +
                  (activeThread === convo.conversation_id && "bg-orange-400")
                }
              >
                <div
                  className="py-0.5 px-3 w-16 text-center rounded-full"
                  style={{
                    background: determineColor(convo.thread[0]?.project),
                  }}
                >
                  {convo.thread[0].project
                    ? convo.thread[0].project.slice(0, 3).toUpperCase()
                    : "NEW"}
                </div>
                <p className="grow max-w-full truncate">
                  {convo.thread[0]?.product}
                </p>
              </div>
            )
          );
        })}
    </div>
  );
};

export default QuestionsList;
