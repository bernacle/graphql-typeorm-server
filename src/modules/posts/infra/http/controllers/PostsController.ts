import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePostsService from '@modules/posts/services/CreatePostsService';

export default class PostsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { company, date, location, position, type } = request.body;

    const createPost = container.resolve(CreatePostsService);

    const post = await createPost.execute({
      company,
      date,
      location,
      position,
      type,
    });

    return response.json(post);
  }
}
