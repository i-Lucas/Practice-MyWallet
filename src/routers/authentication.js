import { Router } from 'express';

import { PostSingupController, PostSinginController } from '../controllers/authentication.js';

const authenticationRouter = Router();

authenticationRouter.post('/sign-up', PostSingupController);
authenticationRouter.post('/sign-in', PostSinginController);

export default authenticationRouter;