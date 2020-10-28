import { Resolver, Query } from 'type-graphql';

@Resolver()
export class PostResolver {
  @Query(() => String)
  hello(): string {
    return 'world';
  }
}
