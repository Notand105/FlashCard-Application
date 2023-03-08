import { Element } from "./Types";

export interface FlashCardContext {
  InitialData : Element[],
  LoadData: () => void,
  deleteElement : (id: string) => void,
  logged: boolean,


}