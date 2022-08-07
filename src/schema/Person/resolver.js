import mongoose from "mongoose";
import { PersonModel as Person } from "./model.js";

export const PersonResolver = {
  Query: {
    people: () => Person.find(),
  },
};
