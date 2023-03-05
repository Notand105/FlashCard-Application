import { Link } from "react-router-dom";
import FlashList from "../components/FlashList";
import styles from "../styles/FlashCardPage.module.css";

const FlashCards = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1 style={{ color: "red" }}>My flashcards</h1>
        <Link to="/submit">
          <button className={styles.btn}>
            <span className="material-symbols-outlined">add_circle</span>
            Agregar flashcard{" "}
          </button>
        </Link>
      </div>
      <FlashList />
    </div>
  );
};

export default FlashCards;
