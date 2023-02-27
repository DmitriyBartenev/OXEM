import React, {Dispatch, SetStateAction, useState} from "react";

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
    summa: number,
    setSumma: Dispatch<SetStateAction<number>>
}

const Price: React.FC<PriceProps> = ({ label, text, min, max, step }) => {

    const [value, setValue] = useState<string>('0');

    return(
        <StyledCalculatorBox>
            <label>
                {label}
            </label>
            <StyledInputTextBox>
                <StyledInputText type='text' value={value} onChange={(e) => setValue(e.target.value)} />
                <span>{text}</span>
            </StyledInputTextBox>
            <StyledRangeInputBox>
                <StyledInputRange type='range' min={min} max={max} step={step} value={value} onChange={(e) => setValue(e.target.value)}/>
            </StyledRangeInputBox>
        </StyledCalculatorBox>  
    )
}

export default Price;