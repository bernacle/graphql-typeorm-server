import 'reflect-metadata';
import '@shared/infra/typeorm';
import { ApolloServer } from 'apollo-server';
import { PostResolver } from '@modules/posts/resolvers/PostResolver';
import { buildSchema } from 'type-graphql';

async function main() {
  const schema = await buildSchema({
    resolvers: [PostResolver], // add this
  });

  const server = new ApolloServer({ schema });

  await server.listen(4000);
  console.log('Server has started!');
}

main();
