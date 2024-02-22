import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, isError } from "../../../../lib/requests";
import toast from "react-hot-toast";

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

      const createConversationResponse = await postRequest("/new_convo/", {
        user_id: uuid,
      });

      if (isError(createConversationResponse)) {
        return thunkAPI.rejectWithValue({
          message: createConversationResponse.error,
        });
      }

      finalConversationId = createConversationResponse.data.conversation_id;
    }

    let questionResponse = "";

    if (payload?.api === "martha_ai") {
      questionResponse = await postRequest("/martha_ai/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }
    if (payload?.api === "martha4p") {
      questionResponse = await postRequest("/martha4p/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }

    if (payload?.api === "retry_martha") {
      questionResponse = await postRequest("/retry_martha/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }

    if (payload?.api === "confirm_martha_ai") {
      questionResponse = await postRequest("/confirm_martha_ai/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        output: payload?.output,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,
      });
    }
    if (payload?.api === "confirm_martha4p") {
      console.log(payload, "chut");
      questionResponse = await postRequest("/confirm_martha4p/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        output: payload?.output,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,
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
    //
    if (payload?.api === "confirm_sianins3") {
      questionResponse = await postRequest("/confirm_sianins3/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,
        output: payload?.output,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }
    if (payload?.api === "confirm_sianv1") {
      questionResponse = await postRequest("/confirm_sianv1/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,
        output: payload?.output,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }
    if (payload?.api === "confirm_sianlnk3") {
      questionResponse = await postRequest("/confirm_sianlnk3/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,
        output: payload?.output,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }

    //
    if (payload?.api === "sianins3") {
      questionResponse = await postRequest("/sianins3/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }
    if (payload?.api === "sianv1") {
      questionResponse = await postRequest("/sianv1/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }
    if (payload?.api === "sianlnk3") {
      questionResponse = await postRequest("/sianlnk3/", {
        user_id: uuid,
        conversation_id: finalConversationId,
        // query: "query1",
        project: payload?.inputValues?.project,
        objective: payload?.inputValues?.theme,
        target_audience: payload?.inputValues?.targetAudience,
        product: payload?.inputValues?.product,
        industry: payload?.inputValues?.industry,
        earlier_email: payload?.inputValues?.earlier_email,

        // offer: payload?.inputValues?.specialOffer,
        // email_seq: payload?.inputValues?.emailSeqNumber,
      });
    }
    if (payload?.api === "sian") {
      console.log("sian ");
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
    if (payload?.api === "retry_fbin") {
      questionResponse = await postRequest("/retry_fbin/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }
    if (payload?.api === "confirm_fbin") {
      questionResponse = await postRequest("/confirm_fbin/", {
        user_id: uuid,
        conversation_id: finalConversationId,
      });
    }

    if (isError(questionResponse)) {
      return thunkAPI.rejectWithValue({
        message: questionResponse.error,
      });
    }

    if (questionResponse?.message) {
      toast.success(questionResponse?.message);
    } else {
      return {
        query: payload.query,
        answers: questionResponse?.result,
        conversationId: finalConversationId,
        role: payload?.mind,
      };
    }
  }
);

export default createNewQuestion;
