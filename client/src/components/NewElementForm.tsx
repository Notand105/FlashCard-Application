import { Element } from "../types/Types";
import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/Context";
import { FlashCardContext } from "../types/ApiType";
import styles from "../styles/NewElement.module.css";

const NewElementForm = () => {
  const context = useContext(MainContext) as FlashCardContext;
  const navigate = useNavigate();
  const name = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const [showName, setShowName] = useState("");
  const [showDesc, setShowDesc] = useState("");
  const [FocusName, setFocusName] = useState(false);
  const [FocusDesc, setFocusDesc] = useState(false);
  const [flip, setFlip] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      name: name.current?.value,
      description: description.current?.value,
    };

    await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    context.LoadData();

    navigate("/flashcards");
  };

  const handleInputChange = (type: string) => {
    type === "name"
      ? setShowName(name.current?.value || "")
      : setShowDesc(description.current?.value || "");
  };
  const handleFocus = (type: string) => {
    if (type === "name") {
      setFlip(true);
      setTimeout(() => {
        setFocusDesc(false);
      }, 100);
      setTimeout(() => {
        setFocusName((FocusName) => !FocusName);
      }, 300);
      setTimeout(() => {
        setFlip(false);
      }, 1000);
    } else {
      setFlip(true);
      setTimeout(() => {
        setFocusName(false);
      }, 100);
      setTimeout(() => {
        setFocusDesc((FocusDesc) => !FocusDesc);
      }, 300);
      setTimeout(() => {
        setFlip(false);
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.demostration}>
        <div className={`${styles.card}  ${flip ? styles.flip : ""} `}>
          {FocusName ? (
            <div className={styles.frontPart}>
              <h2>{showName}</h2>
            </div>
          ) : null}
          {FocusDesc ? (
            <div className={styles.backPart}>
              <p>{showDesc}</p>
            </div>
          ) : null}
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Ingresa el nombre del elemento</label>
        <input
          type="text"
          name="name"
          ref={name}
          onChange={() => handleInputChange("name")}
          onFocus={() => handleFocus("name")}
          // onBlur={ ()=>setFocusName(false)}
        />
        <label>Ingresa un descripción</label>
        <input
          type="text"
          name="description"
          ref={description}
          onChange={() => handleInputChange("desc")}
          onFocus={() => handleFocus("desc")}
          // onBlur={ ()=>setFocusDesc(false)}
        />
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewElementForm;
