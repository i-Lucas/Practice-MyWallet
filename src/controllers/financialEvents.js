import * as service from '../services/financialEvents.js';

export async function PostFinancialEventsController(req, res) {

    const { value, type } = req.body;

    if (!value || !type) return res.sendStatus(422);

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) return res.sendStatus(422);

    if (value < 0) return res.sendStatus(422);

    const { id } = res.locals.user;
    await service.insertFinancialEvent(id, value, type);

    res.sendStatus(201);
}

export async function GetFinancialEventsController(req, res) {

    const { id } = res.locals.user;
    const events = await service.getUserFinancialEvents(id);

    res.send(events);
}

export async function GetFinancialEventsSumController(req, res) {

    const { id } = res.locals.user;
    const sum = await service.getFinancialEventSum(id);
    res.send(sum);
}