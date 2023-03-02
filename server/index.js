import express from "express";
import {connectDatabase } from "./Database/db.js";
import {
  createElement,
  deleteElement,
  getElements,
} from "./Handlers/apiEndpoints.js";
import cors from 'cors'
import bodyParser from "body-parser";


const app = express();
  
connectDatabase();

// MiddleWares
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routes endpoints

app.get("/api", getElements);

app.post("/api", createElement);

app.delete("/api/:id", deleteElement);

app.listen(3000);

console.log("server listening in port 3000");
