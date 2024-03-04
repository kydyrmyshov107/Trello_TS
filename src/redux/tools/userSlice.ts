import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_USER;
interface TypeTodos {
  _id: number;
  title: string;

  todos: [
    {
      _id: number;
      todoTitle: string;
    }
  ];
}

interface TypeInitialState {
  data: TypeTodos[];
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: boolean | null | any;
}

const initialState: TypeInitialState = {
  data: [],
  loading: false,
  error: false,
};

interface TypeTodoNewData {
  title: string;
}

interface TypeColumnData {
  _id: number;
  title: string;
  newUserData: {
    title: string;
    todos: { _id: number; todoTitle: string }[];
  };
}

export const postRequest = createAsyncThunk(
  "post/Items",
  async (newData: TypeTodoNewData) => {
    try {
      const response = (await axios.post(url, newData)).data;
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getRequest = createAsyncThunk("get/items", async () => {
  try {
    const response = (await axios.get(url)).data;
    return response;
  } catch (error) {
    console.error(error);
  }
});

export const patchRequest = createAsyncThunk(
  "patch/items",
  async ({ newUserData, _id }: TypeColumnData) => {
    console.log(newUserData);

    try {
      const response = (await axios.patch(`${url}/${_id}`, newUserData)).data;

      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteRequest = createAsyncThunk(
  "delete/items",
  async (id: number) => {
    try {
      (await axios.delete(`${url}/${id}`)).data;
      return id;
    } catch (error) {
      console.error(error);
    }
  }
);

export const putRequest = createAsyncThunk(
  "put/request",
  async ({ newUserData, _id }: TypeColumnData) => {
    try {
      const response = (await axios.put(`${url}/${_id}`, newUserData)).data;
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(patchRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patchRequest.fulfilled, (state, action) => {
        state.data = action.payload;

        state.loading = false;
      })
      .addCase(patchRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item._id !== action.payload);
      })
      .addCase(deleteRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(putRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(putRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const userRender = userSlice.reducer;
