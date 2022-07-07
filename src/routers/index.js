import { Router } from 'express';
import authenticationRouter from './authentication.js';
import financialEventsRouter from './financialEvents.js';

const router = Router();

router.use(authenticationRouter);
router.use(financialEventsRouter);

export default router;