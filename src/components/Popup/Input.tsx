import React from "react";
import { FieldValues } from 'react-hook-form';

import { 
    StyledInputContainer,
    StyledIcon 
} from './styles';

import { icons } from "public/_index";

interface InputProps {
    placeholder: string,
    errors: string | undefined,
    getValues: string,
    register: FieldValues
}
const Input: React.FC<InputProps> = ({ errors, placeholder, register, getValues }) => {

    const { CheckIcon } = icons;
    
    return(
        <StyledInputContainer>
            <input 
                type='text'
                placeholder={placeholder}  
                {...register}
                className={errors ? 'error' : ''}
                />
            {
                !errors && getValues?.length && <StyledIcon><CheckIcon/></StyledIcon>
            }
            <p>{errors}</p>
        </StyledInputContainer>
    )
}

export default Input;