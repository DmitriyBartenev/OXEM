import React from "react";

import { 
    StyledCalculatorBox, 
    StyledRangeInput, 
    StyledTextInput 
} from './styles';

const Price: React.FC = () => {

    const [price, setPrice] = React.useState<string>('10');
    
    return(
        <StyledCalculatorBox>
            <label>
                Стоимость автомобиля 
            </label>
            <StyledTextInput type='text' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <StyledRangeInput type='range' min={0} max={4000000} value={price} onChange={(e) => setPrice(e.target.value)}/>
        </StyledCalculatorBox>
    )
}

export default Price;