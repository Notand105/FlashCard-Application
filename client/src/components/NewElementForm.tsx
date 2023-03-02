import {Element} from "../types/Types";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { MainContext } from "../context/Context";
import {FlashCardContext} from '../types/ApiType'


const NewElementForm = () => {

  const context = useContext(MainContext) as FlashCardContext
  const navigate = useNavigate()
  const name  = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)
  const image = useRef<HTMLInputElement>(null)

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let body = {
    name: name.current?.value,
    description: description.current?.value,
    image: image.current?.value
  }

  await fetch('http://localhost:3000/api',{
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body),
    })

  context.LoadData()

  navigate('/flashcards')

  };

  return (
    <form onSubmit={handleSubmit}  >
      <label>Ingresa el nombre del elemento</label>
      <input type="text" name="name" ref={name} />
      <label>Ingresa un descripción</label>
      <input type="text" name="description" ref={description} />
      <label>Ingresa el link de una imagen (opcional) </label>
      <input type="text" name="name" ref={image} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default NewElementForm;
