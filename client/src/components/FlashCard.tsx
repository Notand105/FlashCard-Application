import React, { useContext, useState } from "react";
import { Element } from "../types/Types";
import { MainContext } from "../context/Context";
import { FlashCardContext } from "../types/ApiType";
import styles from "../styles/FlashCard.module.css";

const FlashCard = ({ element }: { element: Element }) => {
  const context = useContext(MainContext) as FlashCardContext;
  const { deleteElement } = context;

  const [Flip, setFlip] = useState(false);

  const handleDeleteClick = (id: string) => {
    deleteElement ? deleteElement(id) : null;
  };

  const toggleFlip = () => {
    setFlip((Flip) => !Flip);
  };

  return (
    <div className={styles.card} onClick={toggleFlip}>
      <div className={styles.controls}>
        <button onClick={() => handleDeleteClick(element._id)}>
         <span className="material-symbols-outlined " style={{color:'red'}} >delete</span> 
        </button>
      </div>

      {Flip ? <h2>{element.name}</h2> : <h3>{element.description}</h3>}
    </div>
  );
};

export default FlashCard;
