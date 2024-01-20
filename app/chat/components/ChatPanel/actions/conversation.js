import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, isError } from "../../../../lib/requests";

const createNewQuestion = createAsyncThunk(
  "chatPanel/createNewQuestion",
  async (payload, thunkAPI) => {
    const {
      authentication: { uuid },
      converSationPanel: { conversationId, mind },
    } = thunkAPI.getState();

    console.log(conversationId, payload, "investor", uuid);
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
      questionResponse = await postRequest("/retry_martha/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }

    if (payload?.api === "confirm_martha") {
      questionResponse = await postRequest("/confirm_martha/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }

    if (payload?.api === "amelia") {
      questionResponse = await postRequest("/amelia/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: "aftc",
        theme: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
      });
    }
    if (payload?.api === "confirm_amelia") {
      questionResponse = await postRequest("/confirm_amelia/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }
    if (payload?.api === "retry_amelia") {
      questionResponse = await postRequest("/retry_amelia/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }
    if (payload?.api === "sian") {
      questionResponse = await postRequest("/sian/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: "aftc",
        theme: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        offer: payload?.inputValues?.specialOffer,
      });
    }
    if (payload?.api === "retry_lntw") {
      questionResponse = await postRequest("/retry_lntw/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }
    if (payload?.api === "confirm_lntw") {
      questionResponse = await postRequest("/confirm_lntw/", {
        user_id: uuid,
        conversation_id: finalConversationId,
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
