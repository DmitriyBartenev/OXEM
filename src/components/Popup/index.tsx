import React, { Dispatch, SetStateAction } from "react";

import { icons } from "public/_index";

import { StyledPopupBox, StyledPopup, StyledPopupContainer, StyledInputBox, StyledSubmit, StyledIcons } from "./styles";

interface PopupProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup: React.FC<PopupProps> = ({ setOpenPopup }) => {
    
    const { CloseIcon, WhatsappIcon, TelegramIcon } = icons;

    return(
        <StyledPopupBox>
            <StyledPopupContainer>
                <StyledPopup>
                    <h3>Онлайн-заявка</h3>
                    <p>Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</p>
                    <form>
                        <StyledInputBox>
                            <input 
                                type='text'
                                placeholder="+7 (921) 123 45 67"    
                                />
                            <input 
                                type='text'
                                placeholder="Имя"/>
                        </StyledInputBox>
                        <StyledSubmit>
                            <p>Нажимая на кнопку «Оставить заявку»,  я даю согласие <span>на обработку персональных данных</span></p>
                            <button>Оставить заявку</button>
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