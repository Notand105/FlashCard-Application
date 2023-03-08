import {createContext, useState, useEffect } from "react";
import { FlashCardContext } from "../types/ApiType";
import { Element } from "../types/Types";

const MainContext = createContext<FlashCardContext | null>(null);

const Context = ({ children }: { children: JSX.Element }) => {

  const [InitialData, setInitialData] = useState<Element[]>([]);
  const [logged, setLogged] = useState<boolean>(true)

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    const data = await fetch("http://localhost:3000/api");
    const response: Element[] = await data.json();

    console.log(response);
    setInitialData(response);
  };

  const deleteElement = async (id: string) => {
    await fetch(`http://localhost:3000/api/${id}`, {
      method: "DELETE",
    }).then(() => console.log("deleting request sended"));

    await LoadData();
  };

  return (
    <MainContext.Provider
      value={{
        InitialData,
        LoadData,
        deleteElement,
        logged,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Context, MainContext };
