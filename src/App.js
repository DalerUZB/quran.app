import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import Ayah from "./Pages/Ayah";
import Home from "./Pages/Home";
import Juz from "./Pages/Juz";
import Surah from "./Pages/Surah";
import SurahByIdName from "./Pages/SurahByIdName";
import Tasbeh from "./Pages/Tasbeh";

function App() {
  const darkTheme = {
    backgrounColor: "#000",
    color: "#fff",
    transition: "0.4s",
  };
  const ligthTheme = {
    backgrounColor: "#fff",
    color: "#000",
    transition: "0.4s",
  };

  const themes = {
    light: ligthTheme,
    dark: darkTheme,
  };
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={themes[theme]} setTheme={setTheme}>
        <Navbar setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juz" element={<Juz />} />
          <Route path="/surah" element={<Surah />} />
          <Route path="/ayah" element={<Ayah />} />
          <Route path="/tasbeh" element={<Tasbeh />} />
          <Route path="/something/:id" element={<SurahByIdName />} />
          <Route
            path="*"
            element={
              <>
                <h1>not found</h1>
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
