const { gql } = require('apollo-server');

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    age: Int
    class: String
    subjects: [String]
    attendance: [String]
  }

  input EmployeeInput {
    name: String!
    age: Int
    class: String
    subjects: [String]
  }

  type Query {
    employees: [Employee]
    employee(id: ID!): Employee
  }

  type Mutation {
    addEmployee(input: EmployeeInput): Employee
    updateEmployee(id: ID!, input: EmployeeInput): Employee
  }
`;

module.exports = typeDefs;
