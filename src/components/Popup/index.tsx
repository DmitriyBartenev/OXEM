import React, { Dispatch, SetStateAction, useState } from "react";

import axios from "axios";

import { icons } from "public/_index";

import { 
    StyledPopupBox, 
    StyledPopup, 
    StyledPopupContainer, 
    StyledInputBox, 
    StyledSubmit, 
    StyledIcons 
} from "./styles";

interface InputValues {
    phoneNumber: string,
    name: string
}

interface PopupProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup: React.FC<PopupProps> = ({ setOpenPopup }) => {
    
    const [inputValue, setInputValue] = useState<InputValues>({
        phoneNumber: '',
        name: ''
    });

    const { CloseIcon, WhatsappIcon, TelegramIcon } = icons;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    };

    const onSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();

        try{

            const response = await axios.post('http://localhost:8000/data', inputValue); 

            if(response.status === 201){
                setInputValue({phoneNumber:'', name:''})
            }

        }catch(e){
            throw new Error('Oops...something went wrong');
        }

    }

    return(
        <StyledPopupBox>
            <StyledPopupContainer>
                <StyledPopup>
                    <h3>Онлайн-заявка</h3>
                    <p>Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</p>
                    <form onSubmit={onSubmit}>
                        <StyledInputBox>
                            <input 
                                type='text'
                                placeholder="+7 (921) 123 45 67"    
                                value={inputValue.phoneNumber}
                                name='phoneNumber'
                                onChange={onChange}
                                />
                            <input 
                                type='text'
                                placeholder="Имя"
                                value={inputValue.name}
                                name='name'
                                onChange={onChange}
                                />
                        </StyledInputBox>
                        <StyledSubmit>
                            <p>Нажимая на кнопку «Оставить заявку»,  я даю согласие <span>на обработку персональных данных</span></p>
                            <button type='submit'>Оставить заявку</button>
                        </StyledSubmit>
                    </form>
                    <StyledIcons>
                        <WhatsappIcon/>
                        <TelegramIcon/>
                    </StyledIcons>
                    <CloseIcon 
                        onClick={() => setOpenPopup(false)}/>
                </StyledPopup>
            </StyledPopupContainer>
        </StyledPopupBox>
    )
}

export default Popup;