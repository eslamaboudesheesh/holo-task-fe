import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import http from "../../services/http-common";

type InitialState = {
  loading: boolean;
  data: any;
  queryText: string;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  data: {},
  queryText: "",
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchDataSearch = createAsyncThunk(
  "Search",
  ({ query, type }: { query: string; type: string }) => {
    const url =
      type !== "users"
        ? `/search/repositories?q=${query}`
        : `/search/users?q=${query}`;

    return http.get(url).then((response: any) => response.data);
  }
);

const DataFormSubmitSlice = createSlice({
  name: "DataForm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDataSearch.fulfilled, (state, action) => {
      const { query } = action.meta.arg;
      state.loading = false;
      state.data = action.payload;
      state.queryText = query;
      state.error = "";
    });
    builder.addCase(fetchDataSearch.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.queryText = "";
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default DataFormSubmitSlice.reducer;
