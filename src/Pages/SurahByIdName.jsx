import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSuraname } from "../store/action";

const SurahByIdName = () => {
  const { id } = useParams();
  const { surahName } = useSelector((store) => store.reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuraname(id));
  }, []);
  console.log(surahName);
  return <div>{id}</div>;
};

export default SurahByIdName;
