import { gql } from "apollo-server";

export const PersonType = gql`
  type Person {
    _id: ID!
    firstname: String
    surname: String
    gender: Gender
  }

  enum Gender {
    m
    f
  }
`;
