import { Person } from "../model/Person.js";

function getAll(req, res) {
  res.status(200).json(req.items);
}

function getOne(req, res) {
  res.status(200).json(req.item);
}

async function post(req, res, next) {
  try {
    const newPerson = await Person.create(req.body);
    return res.status(200).json(newPerson);
  } catch (error) {
    next(error);
  }
}

export { getAll, getOne, post };
