import { Link } from "react-router-dom";
import FlashList from "../components/FlashList";

const FlashCards = () => {

  
  return (
    <div>
      <h1 style={{color:'red'}} >Flashcard list</h1>
      <Link to='/submit' >
        <button>Agregar flashcard</button>
      </Link>
      <FlashList />
    </div>
  );
};

export default FlashCards;
