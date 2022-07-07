import { Router } from 'express';

import {
    PostFinancialEventsMiddleware,
    GetFinancialEventsMiddleware,
    GetFinancialEventsSumMiddleware
} from '../middlewares/financialEvents.js';

import {
    PostFinancialEventsController,
    GetFinancialEventsController,
    GetFinancialEventsSumController
} from '../controllers/financialEvents.js';

const financialEventsRouter = Router();

financialEventsRouter.post('/financial-events', PostFinancialEventsMiddleware, PostFinancialEventsController);
financialEventsRouter.get('/financial-events', GetFinancialEventsMiddleware, GetFinancialEventsController);
financialEventsRouter.get('/financial-events/sum', GetFinancialEventsSumMiddleware, GetFinancialEventsSumController);

export default financialEventsRouter;