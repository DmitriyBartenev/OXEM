import React from "react";

import { 
    StyledCalculatorBox,
    StyledInputWrapper,
    StyledRangeInput, 
    StyledTextInput 
} from './styles';

const Price: React.FC = () => {

    const [price, setPrice] = React.useState<string>('0');
    
    return(
        <StyledCalculatorBox>
            <label>
                Стоимость автомобиля 
            </label>
            <StyledTextInput type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
            <StyledInputWrapper>
                <StyledRangeInput type='range' min={0} max={4000000} step={100000} value={price} onChange={(e) => setPrice(e.target.value)}/>
            </StyledInputWrapper>
        </StyledCalculatorBox>
    )
}

export default Price;