import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, isError } from "../../../../lib/requests";

const createNewQuestion = createAsyncThunk(
  "chatPanel/createNewQuestion",
  async (payload, thunkAPI) => {
    const {
      authentication: { uuid },
      converSationPanel: { conversationId, mind },
    } = thunkAPI.getState();
    console.log("call investor");
    console.log(conversationId, payload, "investor", uuid);
    let finalConversationId = conversationId;

    if (!finalConversationId) {
      console.log("lund");
      /**
       * create new conversation before create question if it does not exist
       */

      const createConversationResponse = await postRequest(
        "/create_new_conversation/",
        {
          user_id: uuid,
        }
      );

      if (isError(createConversationResponse)) {
        return thunkAPI.rejectWithValue({
          message: createConversationResponse.error,
        });
      }

      finalConversationId = createConversationResponse.data.conversation_id;
    }

    let questionResponse = "";

    if (payload?.api === "martha") {
      questionResponse = await postRequest("/martha/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: "aftc",
        theme: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        offer: payload?.inputValues?.specialOffer,
        email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }

    if (payload?.api === "retry_martha") {
      console.log("confirm", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
      questionResponse = await postRequest("/retry_martha/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }

    if (payload?.api === "confirm_martha") {
      console.log("confirm", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
      questionResponse = await postRequest("/confirm_martha/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }

    if (payload?.api === "fetch_user_history") {
      console.log("fetch_user_history/", uuid);

      questionResponse = await postRequest("/fetch_user_history/", {
        user_id: payload?.getInputUser,
      });
      console.log(questionResponse, "fetch_user_history/");
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
      answers: questionResponse?.result,
      conversationId: finalConversationId,
      role: payload?.mind,
    };
  }
);

export default createNewQuestion;
