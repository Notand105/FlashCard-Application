import { Element } from "./Types";

export interface FlashCardContext {
  num:number,
  InitialData : Element[],
  LoadData: () => void,
  deleteElement : (id: string) => void,



}