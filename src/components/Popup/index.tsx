import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

import { Inputs } from "types/HomePage";
import { schema } from "./validation";

import Input from "./Input";
import Icons from "./Icons";

import { 
    StyledPopupBox, 
    StyledPopup, 
    StyledPopupContainer, 
    StyledInputBox, 
    StyledSubmit,
    StyledSuccessfulMessage,
    StyledErrorMessage,
} from "./styles";

import { icons } from "public/_index";

interface PopupProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup: React.FC<PopupProps> = ({ setOpenPopup }) => {

    const [isSuccessful, setSuccessful] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const { CloseIcon } = icons;

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {

        try{

            const response = await axios.post('http://localhost:8000/data', data); 

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
        <StyledPopupBox>
            <StyledPopupContainer>
                <StyledPopup>
                    <h3>Онлайн-заявка</h3>
                    <p>Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</p>
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
                        <StyledSubmit>
                            <p>Нажимая на кнопку «Оставить заявку»,  я даю согласие <span>на обработку персональных данных</span></p>
                            <button type='submit' disabled={isSuccessful}>Оставить заявку</button>
                        </StyledSubmit>
                    </form>
                    <Icons/>
                    <CloseIcon 
                        className='close'
                        onClick={() => setOpenPopup(false)}/>
                </StyledPopup>
            </StyledPopupContainer>
        </StyledPopupBox>
    )
}

export default Popup;