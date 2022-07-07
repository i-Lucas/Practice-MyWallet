import { Router } from 'express';

import { PostSingupMiddleware, PostSinginMiddleware } from '../middlewares/authentication.js';
import { PostSingupController, PostSinginController } from '../controllers/authentication.js';

const authenticationRouter = Router();

authenticationRouter.post('/sign-up', PostSingupMiddleware, PostSingupController);
authenticationRouter.post('/sign-in', PostSinginMiddleware, PostSinginController);

export default authenticationRouter;