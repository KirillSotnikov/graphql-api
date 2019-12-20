const { buildSchema } = require('graphql')


module.exports = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
  }

  input UserInput{
    name: String!
    email: String!
    age: Float!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    addUser(user: UserInput!) : User!
    updateUser(id: ID!, user: UserInput!) : User!
    deleteUser(id: ID!) : Boolean!
  }
`)