import React from "react";

import { 
    StyledCalculatorBox,
    StyledRangeInputBox,
    StyledInputRange, 
    StyledInputText,
    StyledInputTextBox
} from './styles';

interface PriceProps {
    label: string,
    text: string,
    min: number,
    max: number,
    step: number,
}

const Price: React.FC<PriceProps> = ({ label, text, min, max, step }) => {

    const [price, setPrice] = React.useState<string>('0');

    return(
        <StyledCalculatorBox>
            <label>
                {label}
            </label>
            <StyledInputTextBox>
                <StyledInputText type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
                <span>{text}</span>
            </StyledInputTextBox>
            <StyledRangeInputBox>
                <StyledInputRange type='range' min={min} max={max} step={step} value={price} onChange={(e) => setPrice(e.target.value)}/>
            </StyledRangeInputBox>
        </StyledCalculatorBox>
    )
}

export default Price;