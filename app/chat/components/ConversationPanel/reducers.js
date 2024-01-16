import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createNewQuestion from "../ChatPanel/actions/conversation";
import getGetCurrentThread from "../ChatPanel/actions/getCurrentThread";
import { updateNewThread } from "../ChatPanel/reducers";

const initialState = {
  chats: {},
  mind: "",
  conversationId: "",
};

const conversationPanelSlice = createSlice({
  name: "conversationPanel",
  initialState: initialState,

  reducers: {
    selectRole: (state, action) => {
      state.mind = action.payload;
    },

    addQuestionToList: (state, action) => {
      let result = {
        query: action.payload.query,
        answer: "",
        loading: true,
      };
      state.chats = { ...state.chats, result };
    },
  },

  extraReducers(builder) {
    builder.addCase(createNewQuestion.fulfilled, (state, action) => {
      let keys = Object.keys(state.chats);
      let lastKey = keys[keys.length - 1];
      let lastObject = state.chats[lastKey];

      lastObject.answer = action.payload.answers;
      lastObject.loading = false;
      console.log(action.payload);
      state.chats[lastKey] = lastObject;
      state.conversationId = action.payload.conversationId;
      // updateNewThread({
      //   conversationId: action.payload.conversationId,
      //   mind: action.payload.role,
      //   title: action.payload.query,
      // });
    });

    builder.addCase(getGetCurrentThread.fulfilled, (state, action) => {
      state.chats = action.payload.threads ? action.payload.threads : {};
      state.conversationId = action.payload.conversationId;
      state.mind = action.payload.mind;

      console.log(action.payload, "returned payload");
    });
  },
});

export const { selectRole, addQuestionToList } = conversationPanelSlice.actions;

export default conversationPanelSlice.reducer;
