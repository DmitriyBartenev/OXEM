import React, { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

import { Inputs } from "types";
import { schema } from "./validation";
import { baseURL } from "config";

import SubmitBox from "./SubmitBox";
import Input from "./Input";

import { 
    StyledInputBox, 
    StyledSuccessfulMessage, 
    StyledErrorMessage 
} from "./styles";

const PopupForm:React.FC = () => {

    const [isSuccessful, setSuccessful] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {

        try{

            const response = await axios.post(baseURL, data); 

            if(response.status >= 200 && response.status < 300){
                setError(false);
                setSuccessful(true);
            }
    
            setTimeout(() => {
                setSuccessful(false);
                reset();
            }, 2000)

        }catch(error){
            setSuccessful(false);
            setError(true);
            const status = (error as Error).message;
            console.log(status); 
        }
    };
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledInputBox>
                <Input
                    placeholder="+7 (921) 123 45 67"
                    register={{...register('phoneNumber')}}
                    errors={errors.phoneNumber?.message}
                    getValues={getValues('phoneNumber')}
                    isSuccessful={isSuccessful}
                    />
                <Input
                    placeholder="Имя"
                    register={{...register('name')}}
                    errors={errors.name?.message}
                    getValues={getValues('name')}
                    isSuccessful={isSuccessful}
                    />
            </StyledInputBox>
            {
                isSuccessful 
                && 
                <StyledSuccessfulMessage>
                    Заявка успешно отправлена !
                </StyledSuccessfulMessage>
            }
            {
                isError
                &&
                <StyledErrorMessage>
                    Упс...что-то пошло не так
                </StyledErrorMessage>
            }
            <SubmitBox isSuccessful={isSuccessful}/>
        </form>
    )
}

export default PopupForm;