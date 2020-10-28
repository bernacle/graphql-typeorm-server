import { Resolver, Query } from 'type-graphql';
import Post from '@modules/posts/infra/typeorm/entities/Post';
import PostsRepository from '@modules/posts/infra/typeorm/repositories/PostsRepository';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(): Promise<Post[] | undefined> {
    const postsRepository = new PostsRepository();

    const posts = await postsRepository.all();

    return posts;
  }
}
