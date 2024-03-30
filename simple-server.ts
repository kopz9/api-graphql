import { ApolloServer, gql } from "apollo-server";

const users: string[] = [];

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      users: [String]
    }

    type Mutation {
      createUser(name: String!): String!
    }
  `,
  resolvers: {
    Query: {
      users: () => {
        return users;
      },
    },
    Mutation: {
      createUser: (_, { name }) => {
        users.push(name);
        return name;
      }
    }
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server running on ${url}`);
});
