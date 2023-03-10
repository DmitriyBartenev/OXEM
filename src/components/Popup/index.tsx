import React, { Dispatch, SetStateAction, useState } from "react";

import Icons from "./Icons";
import PopupForm from "./PopupForm";

import { 
    StyledPopupBox, 
    StyledPopup, 
    StyledPopupContainer
} from "./styles";

import { icons } from "public";

interface PopupProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup: React.FC<PopupProps> = ({ setOpenPopup }) => {

    const { CloseIcon } = icons;
    
    return( 
        <StyledPopupBox>
            <StyledPopupContainer>
                <StyledPopup>
                    <h3>Онлайн-заявка</h3>
                    <p>Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</p>
                    <PopupForm/>
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