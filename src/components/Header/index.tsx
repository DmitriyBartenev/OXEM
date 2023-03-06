import React, { useState } from "react";
import Image from "next/image";

import Dropdown from "./Dropdown";
import Popup from "../Popup";

import { images } from "public/_index";

import { 
    StyledHeader, 
    StyledContainer, 
    StyledButton, 
    StyledNav 
} from './styles';

const Header: React.FC = () => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [openPopup, setOpenPopup] = useState<boolean>(false);

    const { MainLogo } = images;

    const onOpenPopup = () => {
        setOpenPopup(true);
        setShowDropdown(false);
    }
    
    return(
        <StyledHeader>
            <StyledContainer>
                <Image src={MainLogo} alt='main-logo' title='LeasingCar' width={200} height={35}/>
                <p>лизинговая компания</p> 
            </StyledContainer>
            <StyledContainer>
                <StyledNav>
                    <span 
                        onClick={() => setShowDropdown(!showDropdown)}
                        >
                        Лизинг
                    </span>
                    <span>Каталог</span>
                    <span>О нас</span>
                    {
                        showDropdown && <Dropdown/>
                    }
                </StyledNav>
                <StyledButton 
                    onClick={onOpenPopup}>
                    Оставить заявку
                </StyledButton>
            </StyledContainer>
            {
                openPopup && <Popup setOpenPopup={setOpenPopup} openPopup={openPopup}/>
            }
        </StyledHeader>
    )
}

export default Header;