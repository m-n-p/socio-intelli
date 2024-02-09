import { createSlice } from "@reduxjs/toolkit";
import { getAllThreads } from "./actions/getAllThreads";
import createNewQuestion from "./actions/conversation";
import { getProfileInfo } from "./actions/getProfileInfo";

const initialState = {
  threads: [],
  activeThread: null,
  answer: null,
  userInfo: {},
  conversations: {},
};

const chatPanelSlice = createSlice({
  initialState: initialState,
  name: "chatPanel",

  reducers: {
    selectRole: (state, action) => {
      console.log(state, "sele", action.payload, "");
      state.threads.conversations[action.payload.conversationId].mind =
        action.payload.mind;
    },
    createNewThread: (state) => {
      console.log(state.threads, "state thresasd");
      let newThread = {
        mind: "",
        conversationId: "newThread",
        title: "New Question",
        thread: [],
        newThread: true,
      };
      state.threads = [...state.threads, newThread];
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
      console.log(action.payload.threads, "actions");
      state.threads = action.payload.threads;
    });
    builder.addCase(getProfileInfo.fulfilled, (state, action) => {
      console.log(action.payload, "actions");
      state.threads = action.payload.info.user_info.conversations;
      state.userInfo = action.payload.info;
    });
    builder.addCase(createNewQuestion.fulfilled, (state, action) => {
      // Assuming newThreads is an array
      let newThreads = [...state.threads];
      console.log(newThreads, "rick");

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
          ...newThreads.find(
            (thread) => thread.conversationId === state.activeThread
          )?.thread,
          result,
        },
        answer: action.payload.answers,
      };

      // Find the index of the active thread or the newThread
      const activeThreadIndex = newThreads.findIndex(
        (thread) =>
          thread.conversationId === action.payload.conversationId ||
          thread.newThread
      );

      if (activeThreadIndex !== -1) {
        // Update existing thread
        newThreads[activeThreadIndex] = { ...object };
      } else {
        // Add new thread
        newThreads.push({ ...object });
      }

      // Remove 'newThread' if it exists
      newThreads = newThreads.filter((thread) => !thread.newThread);

      console.log(newThreads, "after all updates");

      // Update state
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
