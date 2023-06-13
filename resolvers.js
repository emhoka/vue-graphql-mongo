// GraphQL Resolvers
const resolvers = {
    Query: {
      greetings: () => "GraphQL is Awesome",
      welcome: (parent, args) => `Hello ${args.name}`,
    },
  };
  
  module.exports = { resolvers };