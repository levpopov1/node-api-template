import mongoose from "mongoose";
const Schema = mongoose.Schema;

var PersonSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
});

export const Person = mongoose.model("Person", PersonSchema, "people");
