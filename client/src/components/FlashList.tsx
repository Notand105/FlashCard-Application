import React, { useContext } from "react";
import { Element } from "../types/Types";
import FlashCard from "./FlashCard";
import { MainContext } from "../context/Context";
import { FlashCardContext } from "../types/ApiType";
import styles from '../styles/FlashCardList.module.css'

const FlashList = () => {

  const context = useContext(MainContext) as FlashCardContext
  const {InitialData} = context

  console.log(context)

  return (
    <div className={styles.flashContainer} >
      { InitialData &&
      InitialData.map((element: Element, index: number) => (
        <FlashCard
          key={index}
          element={element}
        />
      ))}
    </div>
  );
};

export default FlashList;
