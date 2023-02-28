import React, { useState } from "react";

import { 
    StyledContainer, 
    StyledInputs, 
    StyledCalculatedValue, 
    StyledButton, 
    StyledCalculatorBox, 
    StyledInputTextBox, 
    StyledInputText, 
    StyledRangeInputBox, 
    StyledInputRange,
    StyledCalculatedBox 
} from './styles';

interface FormValues {
    carPrice: string,
    deposit: string,
    duration: string
}

const Calculator: React.FC = () => {

    const [inputValues, setInputValues] = useState<FormValues>({
        carPrice:'100000',
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

    const sum = Math.round(parseInt(carPrice) *(1-12/100));

    const loanAmount = parseInt(carPrice) - parseInt(deposit);
    const monthlyInterestRate = (12 / 100) / 12;
    const discountFactor = ((1 + monthlyInterestRate) ** parseInt(duration) - 1) / (monthlyInterestRate * (1 + monthlyInterestRate) ** parseInt(duration));
    const monthlyPayment = Math.round((loanAmount / discountFactor));

    return(
        <StyledContainer>
            <h3>Рассчитайте стоимость автомобиля в лизинг</h3>
            <StyledInputs>
                <StyledCalculatorBox>
                    <label>
                        Стоимость автомобиля
                    </label>
                    <StyledInputTextBox>
                        <StyledInputText 
                            type='text'
                            name='carPrice'
                            value={carPrice}
                            onChange={handleInputChange}/>
                        <span>₽</span>
                    </StyledInputTextBox>
                    <StyledRangeInputBox>
                        <StyledInputRange 
                            type='range' 
                            name='carPrice'
                            min={100_000} 
                            max={4_000_000} 
                            step={100_000}
                            value={carPrice}
                            onChange={handleInputChange}/>
                    </StyledRangeInputBox>
                </StyledCalculatorBox>
                <StyledCalculatorBox>
                    <label>
                        Первоначальный взнос
                    </label>
                    <StyledInputTextBox>
                        <StyledInputText 
                            type='text'
                            name='deposit'
                            value={deposit}
                            onChange={handleInputChange}/>
                        <span>12%</span>
                    </StyledInputTextBox>
                    <StyledRangeInputBox>
                        <StyledInputRange 
                            type='range' 
                            name='deposit'
                            min={50_000} 
                            max={carPrice} 
                            step={50_000}
                            value={deposit}
                            onChange={handleInputChange}/>
                    </StyledRangeInputBox>
                </StyledCalculatorBox>  
                <StyledCalculatorBox>
                    <label>
                        Срок лизинга
                    </label>
                    <StyledInputTextBox>
                        <StyledInputText 
                            type='text'
                            name='duration'
                            value={duration}
                            onChange={handleInputChange}/>
                        <span>мес.</span>
                    </StyledInputTextBox>
                    <StyledRangeInputBox>
                        <StyledInputRange 
                            type='range' 
                            name='duration'
                            min={1} 
                            max={60} 
                            step={1}
                            value={duration}
                            onChange={handleInputChange}/>
                    </StyledRangeInputBox>
                </StyledCalculatorBox>    
            </StyledInputs>
            <StyledCalculatedValue>
                <StyledCalculatedBox>
                    <p>Сумма договора лизинга</p>
                    <span>{sum.toLocaleString().replace(/,/g, ' ')} ₽</span>
                </StyledCalculatedBox>   
                <StyledCalculatedBox>
                    <p>Ежемесячный платеж от</p>
                    <span>{monthlyPayment.toLocaleString().replace(/,/g, ' ')} ₽</span>
                </StyledCalculatedBox>   
                <StyledButton>
                    Оставить заявку
                </StyledButton>
            </StyledCalculatedValue>
        </StyledContainer>
    )
}

export default Calculator;