import React from "react";

import { 
    StyledCalculatedValue, 
    StyledCalculatedBox, 
    StyledButton 
} from './styles';

interface TotalProps {
    carPrice: number,
    deposit: number,
    duration: number
}

const Total:React.FC<TotalProps> = ({ carPrice, deposit, duration }) => {

    const sum = Math.round(carPrice * (1 - 12 / 100));

    const loanAmount = carPrice - deposit;
    const monthlyInterestRate = (12 / 100) / 12;
    const discountFactor = ((1 + monthlyInterestRate) ** duration - 1) / (monthlyInterestRate * (1 + monthlyInterestRate) ** duration);
    const monthlyPayment = Math.round((loanAmount / discountFactor));
    
    return(
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
    )
}

export default Total;