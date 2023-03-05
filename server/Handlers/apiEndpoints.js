import { Element } from "../Database/db.js";

const getElements = async (req, res) => {
  try {
    const response = await Element.find();

    res.send(response);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const createElement = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log(req.body);

    let newElement = new Element({
      name,
      description,
    });
    console.log(newElement);

    await newElement.save();

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteElement = async (req, res) => {
  try {
    const id = req.params.id;
    
    await Element.findByIdAndDelete(id);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export {createElement, getElements, deleteElement}