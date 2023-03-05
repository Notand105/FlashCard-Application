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
  const handleFocus = () => {
    setFocusName((FocusName) => !FocusName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.demostration}>
        <div className={styles.card}>
          {FocusName ? <h2>{showName}</h2> : <p>{showDesc}</p>}
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Ingresa el nombre del elemento</label>
        <input
          type="text"
          name="name"
          ref={name}
          onChange={() => handleInputChange("name")}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        <label>Ingresa un descripción</label>
        <input
          type="text"
          name="description"
          ref={description}
          onChange={() => handleInputChange("desc")}
        />
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewElementForm;
