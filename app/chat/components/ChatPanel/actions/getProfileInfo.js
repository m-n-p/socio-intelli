import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, isError } from "../../../../lib/requests";
export const getProfileInfo = createAsyncThunk(
  "chatPanel/getProfileInfo",
  async (payload, thunkAPI) => {
    const {
      authentication: { uuid },
    } = thunkAPI.getState();

    const info = await await postRequest("/fetch_user_history/", {
      user_id: uuid,
    });

    if (isError(info)) {
      return thunkAPI.rejectWithValue({
        message: info.error,
      });
    }

    return {
      info: info.result,
    };
  }
);
