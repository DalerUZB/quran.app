import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchSurah = createAsyncThunk("fetchSurah", () =>
  api.fetchSurahApi()
);

export const fetchSuraname = createAsyncThunk("fetchSurahByName", (id) =>
  api.fetchSurahByName(id)
);

export const fetchTaqvim = createAsyncThunk("fetchTaqvimNamaz", (body) =>
  api.fetchTaqvimNamaz(body)
);
