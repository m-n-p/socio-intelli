import { createAsyncThunk } from "@reduxjs/toolkit";

const getGetCurrentThread = createAsyncThunk(
  "chatPanel/getCurrentThread",
  async (payload, thunkAPI) => {
    const {
      chatPanel: { threads },
    } = thunkAPI.getState();
    let convoId = payload?.conversationId;
    console.log(threads, "threads");
    let returnThreads = threads.filter(
      (obj) => obj?.conversation_id === convoId
    );
    console.log(returnThreads, "returnThreads");

    return {
      threads: returnThreads?.length > 0 ? returnThreads[0]?.thread : [],
      mind: returnThreads?.length > 0 ? returnThreads[0]?.mind : "",
      conversationId:
        payload?.conversationId !== "newThread" ? payload?.conversationId : "",
    };
  }
);

export default getGetCurrentThread;
