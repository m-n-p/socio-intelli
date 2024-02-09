import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, isError } from "../../../../lib/requests";
import toast from "react-hot-toast";
export const getProfileInfo = createAsyncThunk(
  "chatPanel/getProfileInfo",
  async (payload, thunkAPI) => {
    const {
      authentication: { uuid },
    } = thunkAPI.getState();

    const info = await postRequest("/user_convo/", {
      user_id: uuid,
    });

    console.log(info, "info");

    if (isError(info)) {
      console.log(info?.error, " shit");
      await toast.error(info?.error + "in fetch_user_history");

      return thunkAPI.rejectWithValue({
        message: info.error,
      });
    }

    return {
      info: info.data,
    };
  }
);
