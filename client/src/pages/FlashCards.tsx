import { Link } from "react-router-dom";
import FlashList from "../components/FlashList";
import styles from "../styles/FlashCardPage.module.css";
import { MainContext } from "../context/Context";
import { FlashCardContext } from "../types/ApiType";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MustLog from "../components/MustLog";

const FlashCards = () => {

  const context = useContext(MainContext) as FlashCardContext
  const logged = context.logged
  const navigate = useNavigate()

  return ( 
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>My flashcards</h1>
        <Link to="/submit">
          <button className={styles.btn}>
            <span className="material-symbols-outlined">add_circle</span>
            Agregar flashcard{" "}
          </button>
        </Link>
      </div>
      <FlashList />
    </div> 
      )
};

export default FlashCards;
