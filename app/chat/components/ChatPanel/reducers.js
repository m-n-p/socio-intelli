import { createSlice } from "@reduxjs/toolkit";
import { getAllThreads } from "./actions/getAllThreads";
import createNewQuestion from "./actions/conversation";

const initialState = {
  threads: {},
  activeThread: null,
};

const chatPanelSlice = createSlice({
  initialState: initialState,
  name: "chatPanel",

  reducers: {
    selectRole: (state, action) => {
      state.threads.conversations[action.payload.conversationId].mind =
        action.payload.mind;
    },
    createNewThread: (state) => {
      console.log(state, "state thresasd");
      let newThread = {
        mind: "",
        conversationId: "newThread",
        title: "New Question",
        thread: {},
        newThread: true,
      };
      state.threads.conversations = {
        ...state.threads.conversations,
        newThread,
      };
    },
    switchActiveThread: (state, action) => {
      state.activeThread = action.payload;
    },
    updateNewThread: (state, action) => {
      let newThreads = { ...threads };
      console.log(newThreads, "beforeupdate");
      newThreads.conversations[activeThread].conversationId =
        action.payload.conversationId;
      newThreads.conversations[activeThread].title = action.payload.title;
      newThreads.conversations[activeThread].newThread = false;
      newThreads.conversations[activeThread].mind = action.payload.mind;
      console.log(newThreads, "afterupdate");
      state.threads = newThreads;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllThreads.fulfilled, (state, action) => {
      console.log(action.payload, "actions");
      state.threads = action.payload.threads;
    });
    builder.addCase(createNewQuestion.fulfilled, (state, action) => {
      let newThreads = { ...state.threads };
      let result = {
        query: action.payload.query,
        answer: action.payload.answers,
      };
      let object = {
        conversationId: action.payload.conversationId,
        title: action.payload.query,
        newThread: false,
        mind: action.payload.role,
        thread: {
          ...newThreads.conversations[state.activeThread].thread,
          result,
        },
      };
      delete newThreads.conversations.newThread;
      newThreads.conversations[action.payload.conversationId] = { ...object };
      console.log(newThreads, "after all updates");
      state.threads = newThreads;
      state.activeThread = action.payload.conversationId;
    });
  },
});

export const {
  selectRole,
  createNewThread,
  switchActiveThread,
  updateNewThread,
} = chatPanelSlice.actions;

export default chatPanelSlice.reducer;
