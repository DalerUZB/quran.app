import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchSurah = createAsyncThunk("fetchSurah", () =>
  api.fetchSurahApi()
);

export const fetchSuraname = createAsyncThunk("fetchSurahByName", (id) =>
  api.fetchSurahByName(id)
);

export const fetchSuraAudio = createAsyncThunk("fetchSurahAudio", (id) =>
  api.fetchSurahAudio(id)
);

export const fetchTranslate = createAsyncThunk(
  "fetchSurahTranslation",
  (body) => api.fetchSurahTranslation(body)
);

export const fetchTaqvim = createAsyncThunk("fetchTaqvimNamaz", (body) =>
  api.fetchTaqvimNamaz(body)
);
