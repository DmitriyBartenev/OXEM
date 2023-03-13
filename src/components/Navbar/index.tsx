import React, { Dispatch, SetStateAction } from "react";

import { 
    StyledNav, 
    StyledNavbar,
    StyledButton,
    StyledNavbarMenu,
    StyledCloseButton
} from "./styles";

import { icons } from "public";

interface NavbarProps {
    setShowNavbar: Dispatch<SetStateAction<boolean>>,
    onOpenPopup: () => void
};   

const Navbar:React.FC<NavbarProps> = ({ setShowNavbar, onOpenPopup }) => {

    const { CloseIcon } = icons;
    
    return(
        <StyledNavbarMenu>
            <StyledNavbar>
                <StyledNav>
                    <span>Лизинг</span>
                    <span>Каталог</span>
                    <span>О нас</span>
                </StyledNav>
                <StyledButton onClick={onOpenPopup}>
                    Оставить заявку
                </StyledButton>
                <StyledCloseButton>
                    <CloseIcon onClick={() => setShowNavbar(false)}/>
                </StyledCloseButton>
            </StyledNavbar>
        </StyledNavbarMenu>
    )
}

export default Navbar;