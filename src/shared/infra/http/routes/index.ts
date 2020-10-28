import { Router } from 'express';
import postsRouter from '@modules/posts/infra/http/routes/posts.routes';

const routes = Router();

routes.use('/posts', postsRouter);

export default routes;
