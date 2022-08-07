import { gql } from "apollo-server";

export const PersonQuery = gql`
  type Query {
    people: [Person]
    person: Person
  }
`;
