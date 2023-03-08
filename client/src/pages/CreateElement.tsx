import NewElementForm from "../components/NewElementForm";
import { MainContext } from "../context/Context";
import { useContext, useEffect } from "react";
import { FlashCardContext } from "../types/ApiType";
import { useNavigate } from "react-router-dom";
import MustLog from "../components/MustLog";

const CreateElement = () => {
  const context = useContext(MainContext) as FlashCardContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (!context.logged) {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  }, []);

  return (
    <div>
      {context.logged ? (
        <NewElementForm />
      ) : (
        <div>
          <MustLog />
        </div>
      )}{" "}
    </div>
  );
};

export default CreateElement;
