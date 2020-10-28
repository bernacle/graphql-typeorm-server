import { GraphQLObjectType, GraphQLString } from 'graphql';

export const QueryRoot = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello world!',
    },
  }),
});
