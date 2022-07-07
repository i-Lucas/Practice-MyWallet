import { Router } from 'express';

const authenticationRouter = Router();

authenticationRouter.post('/sign-up');
authenticationRouter.post('/sign-in');

export default authenticationRouter;