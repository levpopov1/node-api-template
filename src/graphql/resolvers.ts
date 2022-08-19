import { Person } from "../model/Person";

export const Resolvers = {
  Query: {
    people: async () => await Person.find(),
    person: async (parent: any, args: any) => await Person.findById(args.id),
  },
};
