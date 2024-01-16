import { createAsyncThunk } from "@reduxjs/toolkit";

const getGetCurrentThread = createAsyncThunk(
  "chatPanel/getCurrentThread",
  async (payload, thunkAPI) => {
    const {
      chatPanel: { threads },
    } = thunkAPI.getState();
    let convoId = payload?.conversationId;

    let returnThreads = threads.conversations[convoId];

    if (threads?.length > 0) {
      returnThreads = threads.conversations[convoId];
    }

    console.log(
      threads,
      "redux threads",
      convoId,
      threads.conversations[convoId]
    );

    return {
      threads: returnThreads.thread,
      mind: returnThreads.mind,
      conversationId:
        payload?.conversationId !== "newThread" ? payload?.conversationId : "",
    };
  }
);

export default getGetCurrentThread;
