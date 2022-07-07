import { Router } from 'express';

const financialEventsRouter = Router();

financialEventsRouter.post('/financial-events');
financialEventsRouter.get('/financial-events' );
financialEventsRouter.get('/financial-events/sum');

export default financialEventsRouter;