import * as financialEventRepository from "../repositories/financialRepository.js";

export async function insertFinancialEvent(userId, value, type) {
    await financialEventRepository.NewEvent(userId, value, type);
}

export async function getUserFinancialEvents(userId) {
    return await financialEventRepository.UserEvents(userId);
}

export async function getFinancialEventSum(userId) {

    const events = await financialEventRepository.UserEvents(userId);

    const sum = events.reduce((total, event) => {
        return event.type === "INCOME" ?
            total + event.value : total - event.value
    }, 0);

    return { sum };
}
