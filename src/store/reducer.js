import { createSlice } from "@reduxjs/toolkit";
import { fetchSurah, fetchSuraname, fetchTaqvim } from "./action";

const state = {
  dark: "dark",
  light: "light",
  quranNameList: [],
  taqvimTimeListName: [],
  taqvimTimeNamaz: {
    tong_saharlik: null,
    quyosh: null,
    peshin: null,
    asr: null,
    shom_iftor: null,
    hufton: null,
  },
  surahName: [],
};

export const quranAPP = createSlice({
  name: "quran",

  initialState: state,

  reducers: {
    setDarkTheme(state) {
      state.glovalTheme = true;
    },
    setLightTheme(state) {
      state.glovalTheme = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSurah.fulfilled, (state, action) => {
      state.quranNameList = action.payload;
    });
    builder.addCase(fetchTaqvim.fulfilled, (state, action) => {
      state.taqvimTimeListName = action.payload;
      state.taqvimTimeNamaz.tong_saharlik = action.payload.times.tong_saharlik;
      state.taqvimTimeNamaz.quyosh = action.payload.times.quyosh;
      state.taqvimTimeNamaz.peshin = action.payload.times.peshin;
      state.taqvimTimeNamaz.asr = action.payload.times.asr;
      state.taqvimTimeNamaz.shom_iftor = action.payload.times.shom_iftor;
      state.taqvimTimeNamaz.hufton = action.payload.times.hufton;
    });
    builder.addCase(fetchSuraname.fulfilled, (state, action) => {
      state.surahName = action.payload;
    });
  },
});

export const { setDarkTheme, setLightTheme } = quranAPP.actions;

export default quranAPP.reducer;
