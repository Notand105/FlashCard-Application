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
  const description = useRef<HTMLTextAreaElement>(null);
  const [showName, setShowName] = useState("");
  const [showDesc, setShowDesc] = useState("");
  const [focused, setFocused] = useState("name");
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
  const handleFocus = (focus: string) => {
    if (focused != focus) {
      setFlip((flip) => !flip);
    }
    setFocused(focus);
  };

  return (
    <div className={styles.container}>
      <div className={styles.demostration}>
        <div className={`${styles.cardParam}  `}>
          <div className={`${styles.card}  ${flip ? styles.flip : ""} `}>
            <div className={`${styles.frontPart}  `}>
              <h2>{showName}</h2>
            </div>
            <div className={`${styles.backPart}`}>
              <p>{showDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
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
          <textarea
            // type="text"
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
    </div>
  );
};
export default NewElementForm;
