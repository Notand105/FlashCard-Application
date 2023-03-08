import React from "react";
import styles from "../styles/LandingPage.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <div className={styles.info}>
          <h1>
            Flash It 
            <span> {" "}
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

            <button className={styles.btn}>Vamos !</button>
        </div>
        <div className={styles.rightSide}>

        </div>
      </div>
    </div>
  );
};

export default Landing;
