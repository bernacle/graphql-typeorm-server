import Post from '@modules/posts/infra/typeorm/entities/Post';
import ICreatePostDTO from '../dtos/ICreatePostDTO';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  all(): Promise<Post[] | undefined>;
}
