import React from "react";
import styled from "styled-components";

const ComponentSuraForReed = ({
  text,
  showTransationQuranUZB,
  quranTranslationUZ,
}) => {
  return (
    <CoponentSuraForReed>
      <span>{text}</span>
      {showTransationQuranUZB ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vel
          eius modi laudantium, soluta quo mollitia quae nam! Quia quidem
          corporis eveniet culpa amet, minima reiciendis laboriosam inventore
          modi consequatur?
        </p>
      ) : null}
    </CoponentSuraForReed>
  );
};

export default ComponentSuraForReed;

const CoponentSuraForReed = styled.div`
  max-width: 100%;
  min-height: 60px;
  max-height: auto;
  border-radius: 8px;
  margin: 8px auto 8px;
  border: 2px solid;
  background-color: ${(props) => props.theme.backgrounColor};
  color: ${(props) => props.theme.color};
  text-align: right;
  padding: 30px;
  span {
    font-size: 40px;
  }
`;
