const { User, Book } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
  },
};

module.exports = resolvers;
