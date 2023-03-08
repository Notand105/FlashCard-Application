import NewElementForm from "../components/NewElementForm";
import { MainContext } from "../context/Context";
import { useContext, useEffect } from "react";
import { FlashCardContext } from "../types/ApiType";
import { useNavigate } from "react-router-dom";

const CreateElement = () => {
  const context = useContext(MainContext) as FlashCardContext;
  const navigate = useNavigate();
  useEffect(()=>{
    if (!context.logged){
      setTimeout(() => {
       navigate('/login') 
      }, 1500);
    }
  },[])

  return (
    <div>{context.logged ? <NewElementForm /> : 
    <div>
      <h2>
        Debes iniciar sesión para crear flashcards
      </h2>
      <p>Redirigiendo ...</p></div>}
    </div>
  );
};

export default CreateElement;
