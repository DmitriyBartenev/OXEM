import React, { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import Dropdown from "./Dropdown";
import Popup from "../Popup";
import Navbar from "../Navbar";

import { 
    StyledHeader, 
    StyledContainer, 
    StyledButton, 
    StyledNav,
    StyledNavbar
} from './styles';

import { icons, images } from "public";

interface HeaderProps {
    openPopup: boolean,
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ openPopup, setOpenPopup }) => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const { MainLogo } = images;
    const { BurgerIcon } = icons;

    const onOpenPopup = () => {
        setOpenPopup(true);
        setShowDropdown(false);
        setShowNavbar(false);
    }
    
    return(
        <StyledHeader>
            <StyledContainer>
                <Image src={MainLogo} alt='main-logo' title='LeasingCar' width={200} height={35}/>
                <p>лизинговая компания</p> 
            </StyledContainer>
            <StyledNavbar>
                <StyledNav>
                    <span 
                        onClick={() => setShowDropdown(!showDropdown)}>
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
            </StyledNavbar>
            <BurgerIcon 
                onClick={() => setShowNavbar(!showNavbar)} 
                className='burger'/>
            {
                openPopup 
                && 
                <Popup 
                    setOpenPopup={setOpenPopup}/>
            }
            {
                showNavbar 
                && 
                <Navbar 
                    setShowNavbar={setShowNavbar} 
                    onOpenPopup={onOpenPopup}/>
            }
        </StyledHeader>
    )
}

export default Header;