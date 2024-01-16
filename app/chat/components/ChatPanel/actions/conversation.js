import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, isError } from "../../../../lib/requests";

const createNewQuestion = createAsyncThunk(
  "chatPanel/createNewQuestion",
  async (payload, thunkAPI) => {
    console.log("lund");
    const {
      authentication: { uuid },
      converSationPanel: { conversationId, mind },
    } = thunkAPI.getState();
    console.log("call investor");
    console.log(conversationId, payload, "investor");
    let finalConversationId = conversationId;

    if (!finalConversationId) {
      /**
       * create new conversation before create question if it does not exist
       */
      const createConversationResponse = await postRequest(
        "/create_new_conversation/",
        {
          user_id: uuid,
        }
      );
      ``;
      if (isError(createConversationResponse)) {
        return thunkAPI.rejectWithValue({
          message: createConversationResponse.error,
        });
      }

      console.log(createConversationResponse);

      finalConversationId = createConversationResponse.data.conversation_id;
    }

    let questionResponse = "";
    console.log(finalConversationId, uuid, payload);
    if (payload?.api === "query_k1")
      questionResponse = await postRequest("/query_k1/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        query: payload.query,
        mind: "Investor",
      });

    if (payload?.api === "query_kc") {
      questionResponse = await postRequest("/query_kc/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        query: payload.query,
        engine: payload?.engine,
        mind: payload?.mind,
      });
    }

    if (payload?.api === "query_kb") {
      questionResponse = await postRequest("/query_kc/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        query: payload.query,
        engine: payload?.engine,
        mind: payload?.mind,
      });
    }

    if (payload?.api === "query_k2") {
      questionResponse = await postRequest("/query_k2/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        query: payload.query,
        mind: payload?.mind,
      });
    }

    if (isError(questionResponse)) {
      return thunkAPI.rejectWithValue({
        message: questionResponse.error,
      });
    }

    return {
      query: payload.query,
      answers: questionResponse.data.result,
      conversationId: finalConversationId,
      role: payload?.mind,
    };
  }
);

export default createNewQuestion;
