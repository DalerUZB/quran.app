import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchSuraAudio, fetchSuraname, fetchTranslate } from "../store/action";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsInfo } from "react-icons/bs";
import Modal from "react-modal";
import ComponentSuraForReed from "../Components/ComponentSuraForReed";
import { useState } from "react";

const SurahByIdName = () => {
  let LoadingStr = "Loading...";
  const body = document.body;
  Modal.setAppElement(body);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showTransationQuranUZB, setShowTransationQuranUZB] = useState(false);
  const [quranTranslationUZ, setQuranTranslationUZ] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { surahName, surahTranslation, loading } = useSelector(
    (store) => store.reducer
  );
  useEffect(() => {
    dispatch(fetchSuraname(id));
    dispatch(fetchSuraAudio(id));
    dispatch(fetchTranslate(id));
  }, [dispatch]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  let list = [];
  const { ayahs } = surahName;

  if (ayahs) {
    list = ayahs;
  }

  const checkedTransation = (showEven) => {
    setShowTransationQuranUZB(showEven);
  };
  const quranTransUZ = surahTranslation.ayahs;
  console.log(quranTransUZ);
  return (
    <Wrapper>
      <Header>
        <div className="onFloor">
          <p>
            {loading ? (
              LoadingStr
            ) : (
              <p>
                <p>{surahName.englishNameTranslation}</p>
              </p>
            )}
          </p>
          {loading ? (
            LoadingStr
          ) : (
            <>
              {id} - {surahName.englishName}
              <p>{surahName.name}</p>
            </>
          )}
        </div>
        <h2 className="bismillah">بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
      </Header>

      <div className="container">
        {loading
          ? LoadingStr
          : list?.map((ayah) => (
              <ComponentSuraForReed
                quranTranslationUZ={quranTranslationUZ}
                key={ayah.number}
                {...ayah}
                showTransationQuranUZB={showTransationQuranUZB}
              />
            ))}
      </div>
      <Footer>
        <div className="">
          <span className="language">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              onClick={({ target }) => checkedTransation(target.checked)}
            />
            <label htmlFor="vehicle1">Translat</label>
          </span>
          <audio controls className="audio">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
        <span className="iconBack">
          <BsInfo className="big" onClick={openModal} />
          <Link to={"/surah"}>
            <BsFillArrowLeftCircleFill className="big" />
          </Link>
        </span>
      </Footer>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalPopup>
          <h1>{surahName.englishName}: surasi </h1>
          <p>{surahName.name}</p>
          <b>Qayerda nozil bolgan:</b>
          <p>{surahName.revelationType}</p>
          <b>Oyatlar soni:</b>
          <p>{surahName.numberOfAyahs}</p>
          <b>Sura raqami:</b>
          <p>{surahName.number}</p>
          <BsFillArrowLeftCircleFill
            onClick={closeModal}
            className="iconsModal"
          />
        </ModalPopup>
      </Modal>
    </Wrapper>
  );
};

export default SurahByIdName;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  font-family: "Kitab";
  .container {
    width: 100%;
    height: 70%;
    margin-top: 10px;
    overflow-y: scroll;
    padding: 0 4px;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid;
  .onFloor {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
  }
  .bismillah {
    text-align: right;
    margin-right: 30px;
    margin-top: 25px;
    font-size: 30px;
    font-weight: 500;
    font-family: "Kitab";
    color: #980000;
  }
`;

const Footer = styled.div`
  border: 1px solid;
  width: 100%;
  min-height: 11.6%;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .language {
    min-height: 10px;
    max-height: auto;
  }
  .audio {
    width: 130px;
  }
  .iconBack {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .big {
      width: 20px;
      height: 30px;
      color: ${(props) => props.theme.color};
      margin-top: 2px;
    }
  }
`;
const ModalPopup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  text-align: center;
  font-family: "Kitab";
  font-size: 20px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgrounColor};
  h1,
  p,
  b {
    padding: 24px 0;
  }
  .iconsModal {
    width: 50px;
    height: 50px;
  }
`;
