import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

interface User {
  id: string;
  name: string;
}

const users: User[] = [];

const server = new ApolloServer({
  typeDefs: gql`
    type User {
      id: String!
      name: String!
    }

    type Query {
      users: [User]!
    }

    type Mutation {
      createUser(name: String!): User!
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
        const user = {
          id: randomUUID(),
          name
        }
        users.push(user);
        return name;
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server running on ${url}`);
});
