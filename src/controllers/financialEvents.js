import financialRepo from '../repositories/financialRepository.js';
import '../config/setup.js';

export async function PostFinancialEventsController(req, res) {

    try {

        const { value, type } = req.body;

        if (!value || !type) return res.sendStatus(422);

        const financialTypes = ["INCOME", "OUTCOME"];
        if (!financialTypes.includes(type)) return res.sendStatus(422);

        if (value < 0) return res.sendStatus(422);

        await financialRepo.NewEvent(user.id, value, type);
        res.sendStatus(201);

    } catch (err) { return res.status(500).send(err); }
}

export async function GetFinancialEventsController(req, res) {

    try {

        const events = await financialRepo.UserEvents(user.id);
        res.send(events.rows);

    } catch (err) { return res.status(500).send(err); }
}

export async function GetFinancialEventsSumController(req, res) {

    try {

        const events = await financialRepo.UserEvents(user.id);

        const sum = events.rows.reduce(
            (total, event) =>
                event.type === "INCOME" ? total + event.value : total - event.value,
            0
        );

        res.send({ sum });

    } catch (err) { return res.status(500).send(err); }
}