import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Post from '@modules/posts/entities/Post';
import CreatePostDTO from '../dtos/CreatePostDTO';
import UpdatePostDTO from '../dtos/UpdatePostDTO';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(): Promise<Post[] | undefined> {
    return Post.find();
  }

  @Query(() => Post)
  post(@Arg('id') id: string): Promise<Post | undefined> {
    return Post.findOne({ where: { id } });
  }

  @Mutation(() => Post)
  async createPost(@Arg('data') data: CreatePostDTO): Promise<Post> {
    const post = Post.create(data);
    await post.save();
    return post;
  }

  @Mutation(() => Post)
  async updatePost(
    @Arg('id') id: string,
    @Arg('data') data: UpdatePostDTO,
  ): Promise<Post> {
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error('Post not found');
    Object.assign(post, data);
    await post.save();

    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('id') id: string): Promise<boolean> {
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error('Post not found');
    await post.remove();

    return true;
  }
}
