import { Router } from 'express';

import {
    PostFinancialEventsController,
    GetFinancialEventsController,
    GetFinancialEventsSumController
} from '../controllers/financialEvents.js';

import { ensureAuthentication } from '../middlewares/ensureAuthentication.js';

const financialEventsRouter = Router();

financialEventsRouter.use(ensureAuthentication);
financialEventsRouter.post('/financial-events', PostFinancialEventsController);
financialEventsRouter.get('/financial-events', GetFinancialEventsController);
financialEventsRouter.get('/financial-events/sum', GetFinancialEventsSumController);

export default financialEventsRouter;