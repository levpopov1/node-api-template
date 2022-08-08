import { Person } from "../model/Person.js";

export const Resolvers = {
  Query: {
    people: async () => await Person.find(),
    person: async (parent, args) => await Person.findById(args.id),
  },
};
