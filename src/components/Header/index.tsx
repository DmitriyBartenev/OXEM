import React from "react";
import Image from "next/image";

import { images } from "public/_index";

import { StyledHeader, StyledContainer, StyledButton, StyledNav } from './styles';

const Header: React.FC = () => {
    
    const { MainLogo } = images;
    
    return(
        <StyledHeader>
            <StyledContainer>
                <Image src={MainLogo} alt='main-logo' title='LeasingCar' width={200} height={35}/>
                <p>лизинговая компания</p> 
            </StyledContainer>
            <StyledContainer>
                <StyledNav>
                    <a href='#'>Лизинг</a>
                    <a href='#'>Каталог</a>
                    <a href='#'>О нас</a>
                </StyledNav>
                <StyledButton>Оставить заявку</StyledButton>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;