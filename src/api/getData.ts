export interface IInvoicesExpense {
    id: number;
    name: string;
    invoiceNum: string;
    sender: string;
    recipient: string;
    date: string;
    status: "Утв" | "НеУтв" | "Отправлен";
    cardsExpense: IInvoicesCard [];
    cardsArrival: IInvoicesCard [];
}

export interface IInvoicesCard {
    id: number;
    number: number;
    designation: string;
    name: string;
    issued: number;
    accepted: number;
}

export const invoicesExpenseArray: IInvoicesExpense[] = [
    {
        id: 1,
        name: "ВЗН №132313",
        invoiceNum: "132313",
        sender: "Цех 01 / участок Цеха 01",
        recipient: "Цех 02 / участок Цеха 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [
            {
                id: 1,
                number: 1010,
                designation: "574-1700010-03",
                name: "Коробка передач",
                issued: 3,
                accepted: 3
            },
            {
                id: 2,
                number: 10182,
                designation: "915121",
                name: "Кольцо 2В 75  ГОСТ 13940-86",
                issued: 2,
                accepted: 2
            }
        ],
        cardsArrival: [
            {
                id: 1,
                number: 1010,
                designation: "574-1700010-03",
                name: "Коробка передач",
                issued: 3,
                accepted: 3
            },
            {
                id: 2,
                number: 10182,
                designation: "915121",
                name: "Кольцо 2В 75  ГОСТ 13940-86",
                issued: 2,
                accepted: 2
            }
        ]
    },
    {
        id: 2,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 3,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 4,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 5,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 6,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 7,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 8,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 9,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 10,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    },
    {
        id: 11,
        name: "ВЗН №7063041",
        invoiceNum: "7063041",
        sender: "Цех 01",
        recipient: "Цех 02",
        date: "15.06.2024",
        status: "Утв",
        cardsExpense: [],
        cardsArrival: []
    }
];

export interface ILimitCards {
    id: number;
    name: string;
    sender: string;
    recipient: string;
    objectName: string;
}

export const limitCardsArr = [
    {
        id: 1,
        name: "Лимитная карта №1",
        sender: "Склад металла / участок №1",
        recipient: "Кузнечный цех / участок Б",
        objectName: "921031 -- Подшипник 212  ГОСТ 8338-75"
    },
    {
        id: 2,
        name: "Лимитная карта №1",
        sender: "Склад металла / участок №1",
        recipient: "Кузнечный цех / участок Б",
        objectName: "921031 -- Подшипник 212  ГОСТ 8338-75"
    },
    {
        id: 3,
        name: "Лимитная карта №1",
        sender: "Склад металла / участок №1",
        recipient: "Кузнечный цех / участок Б",
        objectName: "921031 -- Подшипник 212  ГОСТ 8338-75"
    },
    {
        id: 4,
        name: "Лимитная карта №1",
        sender: "Склад металла / участок №1",
        recipient: "Кузнечный цех / участок Б",
        objectName: "921031 -- Подшипник 212  ГОСТ 8338-75"
    },
    {
        id: 5,
        name: "Лимитная карта №1",
        sender: "Склад металла / участок №1",
        recipient: "Кузнечный цех / участок Б",
        objectName: "921031 -- Подшипник 212  ГОСТ 8338-75"
    },
];


export interface INomenclature {
    id: number;
    name: string;
    division: string;
    nomenclature: string;
    productionType: string;
}

export const nomenclatureArray: INomenclature [] = [
    {
        id: 1,
        name: "Номенклатура цеха №6042499_C69062",
        division: "Механический цех №1 / Обработка КПП",
        nomenclature: "1220-1108540 -- Тяга",
        productionType: "Готовая"
    }
];

export interface IInventory {
    id: number;
    name: string;
    division: string;
    date: string;
}

export const inventoryArray = [
    {
        id: 1,
        name: "Акт инвентаризации №1501",
        division: "Склад 100 / 1",
        date: "30.04.2022"
    }
];