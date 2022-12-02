import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "../store/reducer";

const Navbar = (props) => {
  const { glovalTheme, dark, light } = useSelector((store) => store.reducer);
  const [toggleTheme, setToggleTheme] = useState(false);
  const dispatch = useDispatch();

  const setDarkThemeFunc = () => {
    dispatch(setDarkTheme());
    setToggleTheme(true);
    props.setTheme(dark);
    document.body.classList.add("dark");
  };
  const setLightThemeFunc = () => {
    dispatch(setLightTheme());
    props.setTheme(light);
    setToggleTheme(false);
    document.body.classList.remove("dark");
  };
  return (
    <Wrapper>
      <div className="leftDivNav">
        <NavLink to={"/"}>
          <span>Taqvim</span>
        </NavLink>
        <NavLink to={"/juz"}>
          <span>Juz</span>
        </NavLink>
        <NavLink to={"/surah"}>
          <span>Surah</span>
        </NavLink>
        <NavLink to={"/ayah"}>
          <span>Ayah</span>
        </NavLink>
        <NavLink to={"/tasbeh"}>{/* <span>Tasbeh</span> */}</NavLink>
        {toggleTheme ? (
          <WiDaySunny className="icon" onClick={() => setLightThemeFunc()} />
        ) : (
          <WiMoonWaxingCrescent3
            onClick={() => setDarkThemeFunc()}
            className="icon"
          />
        )}
      </div>
      <div className="rightDivNav">
        {/* <span>الْقُرْآن الْكَرِيْم</span> */}
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  max-width: 100%;
  height: 70px;
  background-color: #0c84e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .leftDivNav {
    span {
      margin: 0 20px;
      cursor: pointer;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      color: #000;
    }
    position: relative;
  }
  .rightDivNav {
    margin: 20px;
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
    cursor: pointer;
  }
  .active {
    background-color: #fff;
    opacity: 0.6;
    padding: 4px 0px;
    border-radius: 4px;
    transition: 1s all cubic-bezier(0.19, 1, 0.22, 1);
  }
  .icon {
    text-align: center;
    width: 20px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
