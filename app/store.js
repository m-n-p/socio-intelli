import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import authenticationReducer from "./(landing-pages)/reducer";
import chatPanelReducer from "./chat/components/ChatPanel/reducers";
import conversationPanelReducer from "./chat/components/ConversationPanel/reducers";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    chatPanel: chatPanelReducer,
    converSationPanel: conversationPanelReducer,
  },
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
