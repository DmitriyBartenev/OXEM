import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

import { icons } from "public/_index";

import { 
    StyledPopupBox, 
    StyledPopup, 
    StyledPopupContainer, 
    StyledInputBox, 
    StyledSubmit, 
    StyledIcons,
    StyledInputContainer,
    StyledSuccessfulMessage,
    StyledErrorMessage,
    StyledIcon 
} from "./styles";

type Inputs = {
    phoneNumber: string,
    name: string
}

interface PopupProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const phoneRegExp = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
const nameRegExp = /^[А-Яа-я\s]+$/;

const schema = yup.object().shape({
    phoneNumber: yup.string().required('Phone field is a required').matches(phoneRegExp, 'Phone number is not valid'),
    name: yup.string().required('Name field is a required').matches(nameRegExp, 'Name is not valid')
});

const Popup: React.FC<PopupProps> = ({ setOpenPopup }) => {

    const [isSuccessful, setSuccessful] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const { CloseIcon, WhatsappIcon, TelegramIcon, CheckIcon } = icons;

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
                            <StyledInputContainer>
                                <input 
                                    type='text'
                                    placeholder="+7 (921) 123 45 67"    
                                    {...register('phoneNumber')}
                                    className={errors.phoneNumber?.message ? 'error' : ''}
                                    />
                                {
                                    !errors.phoneNumber?.message && getValues('phoneNumber')?.length && <StyledIcon><CheckIcon/></StyledIcon>
                                }
                                <p>{errors.phoneNumber?.message}</p>
                            </StyledInputContainer>
                            <StyledInputContainer>
                                <input 
                                    type='text'
                                    placeholder="Имя"
                                    {...register('name')}
                                    className={errors.name?.message ? 'error' : ''}
                                    />
                                {
                                    !errors.name?.message && getValues('name')?.length && <StyledIcon><CheckIcon/></StyledIcon>
                                }
                                <p>{errors.name?.message}</p>
                            </StyledInputContainer>
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
                    <StyledIcons>
                        <WhatsappIcon/>
                        <TelegramIcon/>
                    </StyledIcons>
                    <CloseIcon onClick={() => setOpenPopup(false)}/>
                </StyledPopup>
            </StyledPopupContainer>
        </StyledPopupBox>
    )
}

export default Popup;