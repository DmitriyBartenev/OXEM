import React from "react";
import { StyledCalculatedBox } from "./styles";

interface CalculatedValueProps {
    label: string,
    sum: number,
}

const CalculatedValue: React.FC<CalculatedValueProps> = ({ label, sum }) => {
    
    return(
        <StyledCalculatedBox>
            <p>{label}</p>
            <span>{sum.toLocaleString().replace(/,/g, ' ')} ₽</span>
        </StyledCalculatedBox>    
    )
}

export default CalculatedValue;