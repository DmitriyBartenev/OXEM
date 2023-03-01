import React from "react";

import { 
    StyledRangeInputBox, 
    StyledCalculatorBox,
    StyledInputTextBox,
    StyledInputText, 
    StyledInputRange 
} from "./styles";

interface InputBoxProps {
    label: string,
    name: string,
    value: string,
    min: number,
    max: number,
    step: number,
    suffix: string,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBox: React.FC<InputBoxProps> = ({ label, name, value, min, max, step, suffix, handleInputChange }) => {
    
    return (
        <StyledCalculatorBox>
          <label>
            {label}
          </label>
          <StyledInputTextBox>
            <StyledInputText 
              type='text'
              name={name}
              value={parseInt(value).toLocaleString()}
              onChange={handleInputChange}
            />
            <span>{suffix}</span>
          </StyledInputTextBox>
          <StyledRangeInputBox>
            <StyledInputRange 
              type='range' 
              name={name}
              min={min} 
              max={max} 
              step={step}
              value={value}
              onChange={handleInputChange}
            />
          </StyledRangeInputBox>
        </StyledCalculatorBox>
    );
}

export default InputBox;
