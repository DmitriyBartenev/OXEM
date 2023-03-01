import React, { useState } from "react";

import InputBox from './InputBox';
import Total from "./Total";

import { 
    StyledContainer, 
    StyledInputs
} from './styles';

interface FormValues {
    carPrice: string,
    deposit: string,
    duration: string
}

const Calculator: React.FC = () => {

    const [inputValues, setInputValues] = useState<FormValues>({
        carPrice: '100000',
        deposit:'50000',
        duration:'1'
    });

    const { carPrice, deposit, duration } = inputValues;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
    }

    return(
        <StyledContainer>
            <h3>Рассчитайте стоимость автомобиля в лизинг</h3>
            <StyledInputs>
                <InputBox
                    label="Стоимость автомобиля"
                    name="carPrice"
                    value={carPrice}
                    min={100_000}
                    max={4_000_000}
                    step={100_000}
                    suffix="₽"
                    handleInputChange={handleInputChange}
                />
                <InputBox
                    label="Первоначальный взнос"
                    name="deposit"
                    value={deposit}
                    min={50_000}
                    max={+carPrice}
                    step={50_000}
                    suffix="12%"
                    handleInputChange={handleInputChange}
                />
                <InputBox
                    label="Срок лизинга"
                    name="duration"
                    value={duration}
                    min={1}
                    max={60}
                    step={1}
                    suffix="мес."
                    handleInputChange={handleInputChange}
                />        
            </StyledInputs>
            <Total
                carPrice={+carPrice}
                deposit={+deposit}
                duration={+duration}
                />
        </StyledContainer>
    )
}

export default Calculator;