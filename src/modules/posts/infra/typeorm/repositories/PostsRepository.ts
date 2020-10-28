import { getRepository, Repository } from 'typeorm';

import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import Post from '@modules/posts/infra/typeorm/entities/Post';

class PostsRepository implements IPostsRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async all(): Promise<Post[] | undefined> {
    const posts = await this.ormRepository.find();

    return posts;
  }

  public async create({
    company,
    date,
    location,
    position,
    type,
  }: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create({
      company,
      date,
      location,
      position,
      type,
    });

    await this.ormRepository.save(post);

    return post;
  }
}

export default PostsRepository;
