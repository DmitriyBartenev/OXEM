import { 
    CalculatedInput, 
    CalculatedOutput 
} from "types/Inputs";

export const inputsData: CalculatedInput[] = [
    {
        id: 1, 
        label: 'Стоимость автомобиля',
        text: '₽',
        min: 0,
        max: 4_000_000,
        step: 100_000
    },
    {
        id: 2,
        label: 'Первоначальный взнос',
        text: '13%',
        min: 0,
        max: 1_000_000,
        step: 50_000
    },
    {
        id: 3,
        label: 'Срок лизинга',
        text: 'мес.',
        min: 0,
        max: 60,
        step: 6
    }
];

export const calculatedData: CalculatedOutput[] = [
    {
        id: 1,
        label: 'Сумма договора лизинга',
        sum: 4_467_313
    },
    {
        id: 2,
        label: 'Ежемесячный платеж от',
        sum: 114_455
    }
]