const Employee = require('../models/employee');
  
const resolvers = {
  Query: {
    employees: async () => await Employee.find(),
    employee: async (_, { id }) => await Employee.findById(id),
  },
  Mutation: {
    addEmployee: async (_, { input }) => {
      const newEmployee = new Employee(input);
      return await newEmployee.save();
    },
    updateEmployee: async (_, { id, input }) => {
      return await Employee.findByIdAndUpdate(id, input, { new: true });
    },
  },
};

module.exports = resolvers;
