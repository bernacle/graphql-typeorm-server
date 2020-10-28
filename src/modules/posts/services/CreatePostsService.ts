import Post from '@modules/posts/infra/typeorm/entities/Post';
import { inject, injectable } from 'tsyringe';
import IPostsRepository from '../repositories/IPostsRepository';

interface IRequest {
  company: string;
  position: string;
  date: Date;
  type: string;
  location: string;
}

@injectable()
class CreatePostsService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) { }

  public async execute({
    company,
    date,
    location,
    position,
    type,
  }: IRequest): Promise<Post> {
    const post = await this.postsRepository.create({
      company,
      date,
      location,
      position,
      type,
    });

    return post;
  }
}

export default CreatePostsService;
