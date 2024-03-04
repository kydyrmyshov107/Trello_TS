import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL;
interface UserData {
  id: number | string;
  name: string;
  password: number | string;
  userImage: string;
}

interface TrellState {
  data: UserData[];
  loading: boolean;
  error: string | null;
}

const initialState: TrellState = {
  data: [],
  loading: false,
  error: null,
};

export const postRequestT = createAsyncThunk(
  "trello/postRequest",
  async (newData: UserData) => {
    try {
      const response = (await axios.post(url, newData)).data;

      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getRequestT = createAsyncThunk("trello/getRequest", async () => {
  try {
    const response = (await axios.get(url)).data;

    return response;
  } catch (error) {
    console.error(error);
  }
});

const trellSlice = createSlice({
  name: "trellSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postRequestT.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postRequestT.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(postRequestT.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getRequestT.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRequestT.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRequestT.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const trellRender = trellSlice.reducer;
