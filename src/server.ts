import "reflect-metadata";
import {ApolloServer} from "apollo-server";

async function bootstrap() {
  const server = new ApolloServer({
    
  });

  const { url } = await server.listen();

  console.log(`🚀 Server running at ${url}`);
}

bootstrap();
