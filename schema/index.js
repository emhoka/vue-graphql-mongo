const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLBoolean,
} = require("graphql");
const Users = require("../models/users");

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID",
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of user.",
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The surname of the userr.",
    },
    jobTitle: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The job title of the user.",
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user.",
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The password of the user.",
    },
    country: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The country of the user.",
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The city of the user.",
    },
    zipcode: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The zipcode of the user.",
    },
    profile: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The profile of the user.",
    },
  }),
});

const userInputType = new GraphQLInputObjectType({
  name: "UserInput",
  fields: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of user.",
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The surname of the user.",
    },
    jobTitle: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The job title of the user.",
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user.",
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The password of the user.",
    },
    country: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The country of the user.",
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The city of the user.",
    },
    zipcode: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The zipcode of the user.",
    },
    profile: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The profile of the user.",
    },
  },
});

const rootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: userType,
      args: {
        user: {
          type: new GraphQLNonNull(userInputType),
        },
      },
      resolve: async (_, args) => {
        try {
          return await Users.create(args.user);
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
    updateUser: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        user: {
          type: new GraphQLNonNull(userInputType),
        },
      },
      resolve: async (_, args) => {
        try {
          return await Users.update(args.id, args.user);
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
    deleteUser: {
      type: GraphQLBoolean,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        try {
          await Users.delete(args.id);
          return true;
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
  },
});

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: {
      type: new GraphQLList(userType),
      resolve: async () => {
        try {
          return await Users.all();
        } catch (err) {
          return new Error(err.message);
        }
      },
    },
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        try {
          return await Users.findById(args.id);
        } catch (err) {
          return new Error(err.message);
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
