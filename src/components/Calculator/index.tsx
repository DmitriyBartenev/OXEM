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

const Calculator: React.FC = () => {

    const [carPrice, setCarPrice] = useState<string>('100000');
    const [deposit, setDeposit] = useState<string>('50000');
    const [duration, setDuration] = useState<string>('1');

    const rate = Math.round((parseInt(deposit) / parseInt(carPrice))*100);

    const sum = Math.round(parseInt(carPrice) *(1-rate/100));


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
                            value={carPrice}
                            onChange={(e) => setCarPrice(e.target.value)}/>
                        <span>₽</span>
                    </StyledInputTextBox>
                    <StyledRangeInputBox>
                        <StyledInputRange 
                            type='range' 
                            min={100_000} 
                            max={4_000_000} 
                            step={100_000}
                            value={carPrice}
                            onChange={(e) => setCarPrice(e.target.value)}/>
                    </StyledRangeInputBox>
                </StyledCalculatorBox>
                <StyledCalculatorBox>
                    <label>
                        Первоначальный взнос
                    </label>
                    <StyledInputTextBox>
                        <StyledInputText 
                            type='text'
                            value={deposit}
                            onChange={(e) => setDeposit(e.target.value)}/>
                        <span>{rate}%</span>
                    </StyledInputTextBox>
                    <StyledRangeInputBox>
                        <StyledInputRange 
                            type='range' 
                            min={50_000} 
                            max={carPrice} 
                            step={50_000}
                            value={deposit}
                            onChange={(e) => setDeposit(e.target.value)}/>
                    </StyledRangeInputBox>
                </StyledCalculatorBox>  
                <StyledCalculatorBox>
                    <label>
                        Срок лизинга
                    </label>
                    <StyledInputTextBox>
                        <StyledInputText 
                            type='text'
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}/>
                        <span>мес.</span>
                    </StyledInputTextBox>
                    <StyledRangeInputBox>
                        <StyledInputRange 
                            type='range' 
                            min={1} 
                            max={60} 
                            step={6}
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}/>
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
                    <span>10000 ₽</span>
                </StyledCalculatedBox>   
                <StyledButton>
                    Оставить заявку
                </StyledButton>
            </StyledCalculatedValue>
        </StyledContainer>
    )
}

export default Calculator;