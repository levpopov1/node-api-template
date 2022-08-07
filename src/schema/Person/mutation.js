import { gql } from "apollo-server";

export const PersonMutation = gql`
  type Mutation {
    addPerson(data: PersonInput!): Person
    updatePerson(id: ID!, data: PersonInput!): Person
  }

  input PersonInput {
    firstname: String
    surname: String
    gender: Gender
  }

  enum Gender {
    m
    f
  }
`;
