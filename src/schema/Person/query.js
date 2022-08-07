import { gql } from "apollo-server-core";

export const PersonQuery = gql`
  type Query {
    people: [Person]
    person: Person
  }
`;
