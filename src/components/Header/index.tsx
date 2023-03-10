import React, { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import Dropdown from "./Dropdown";
import Popup from "../Popup";

import { 
    StyledHeader, 
    StyledContainer, 
    StyledButton, 
    StyledNav 
} from './styles';

import { images } from "public";

interface HeaderProps {
    openPopup: boolean,
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ openPopup, setOpenPopup }) => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

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
                openPopup && <Popup setOpenPopup={setOpenPopup}/>
            }
        </StyledHeader>
    )
}

export default Header;