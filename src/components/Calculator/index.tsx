import React from "react";

import Price from "./Price";

import { StyledContainer } from './styles';

const Calculator: React.FC = () => {
    
    return(
        <StyledContainer>
            <h3>Рассчитайте стоимость автомобиля в лизинг</h3>
            <Price/>
        </StyledContainer>
    )
}

export default Calculator;