import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
import { MainContext } from "../context/Context";
import { FlashCardContext } from "../types/ApiType";

const Landing = () => {
  const context = useContext(MainContext) as FlashCardContext;
  const navigate = useNavigate();

  const handleGo = () => {
    if (context.logged) navigate("/flashcards");
    else navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <div className={styles.info}>
          <h1>
            Flash It
            <span>
              {" "}
              <img
                alt="lighting logo"
                src="/lighting logo.png "
                width="100px"
                height="100px"
              />
            </span>
          </h1>
          <h2>Potencia tu memorización</h2>
          <h3>
            Flash it te permite crear flash cards para reforzar tus metodos de
            estudios, <span>¿ Te animas a intentarlo ?</span>{" "}
          </h3>

          <button onClick={handleGo} className={styles.btn}>
            Vamos ! {" "}
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
};

export default Landing;
