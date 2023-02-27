import React from "react";

import { inputsData, calculatedData } from "@/data";

import Price from "./Price";
import CalculatedValue from "./CalculatedValue";

import { StyledContainer, StyledInputs, StyledCalculatedValue, StyledButton } from './styles';

const Calculator: React.FC = () => {

    
    return(
        <StyledContainer>
            <h3>Рассчитайте стоимость автомобиля в лизинг</h3>
            <StyledInputs>
                {
                    inputsData.map(props => <Price key={props.id} {...props}/>)
                }
            </StyledInputs>
            <StyledCalculatedValue>
                {
                    calculatedData.map(props => <CalculatedValue key={props.id} {...props}/>)
                }
                <StyledButton>
                    Оставить заявку
                </StyledButton>
            </StyledCalculatedValue>
        </StyledContainer>
    )
}

export default Calculator;