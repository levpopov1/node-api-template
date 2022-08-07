import { PersonModel as Person } from "./model.js";

export const PersonResolver = {
  Query: {
    people: async () => await Person.find(),
    person: async (parent, args) => await Person.findById(args.id),
  },
};
