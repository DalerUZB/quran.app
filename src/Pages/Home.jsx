import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchTaqvim } from "../store/action";
const Home = () => {
  const nameRef = useRef();
  const dispatch = useDispatch();
  const { taqvimTimeListName, taqvimTimeNamaz } = useSelector(
    (store) => store.reducer
  );

  function callFunc() {
    dispatch(fetchTaqvim(nameRef.current.value));
    nameRef.current.value = "";
  }

  return (
    <Wrapper>
      <div className="headerTimes">
        <span className="spanInput">
          <input type="text" placeholder="qaysi viloyat" ref={nameRef} />
          <button onClick={() => callFunc()}>Yubormoq</button>
        </span>

        <h1>{taqvimTimeListName.region}</h1>
        <p>taqvim</p>
        <b>{taqvimTimeListName.weekday}</b>
      </div>

      <div className="sectionTimes">
        <div className="namazName">
          <span>Tong</span>
          <span>Quyosh</span>
          <span>Peshin</span>
          <span>Asr</span>
          <span>Shom</span>
          <span>Hufton</span>
        </div>
        <div className="namazTime">
          <span>{taqvimTimeNamaz.tong_saharlik}</span>
          <span>{taqvimTimeNamaz.quyosh}</span>
          <span>{taqvimTimeNamaz.peshin}</span>
          <span>{taqvimTimeNamaz.asr}</span>
          <span>{taqvimTimeNamaz.shom_iftor}</span>
          <span>{taqvimTimeNamaz.hufton}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: calc(100vh - 70.3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 70px;
  .headerTimes {
    .spanInput {
      display: flex;
      align-items: center;
      input {
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 4px 0 0 4px;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        font-family: 700;
        background-color: #555;
        color: #fff;
      }
      button {
        border: none;
        padding: 10px;
        background-color: #555;
        border-radius: 0 4px 4px 0px;
        color: #b79e9e;
      }
    }
    padding-bottom: 80px;
  }
  .sectionTimes {
    color: #010000;
    width: 95%;
    height: 40%;
    margin: 0 auto;
    border-radius: 8px;
    font-family: 700;
    font-family: sans-serif;
    .namazName {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      span {
        width: 100px;
      }
    }
    .namazTime {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      span {
        width: 100px;
        color: #000000;
      }
    }
  }
`;
