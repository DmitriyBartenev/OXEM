import React, { useState } from "react";
import Image from "next/image";

import Dropdown from "./Dropdown";

import { images } from "public/_index";

import { 
    StyledHeader, 
    StyledContainer, 
    StyledButton, 
    StyledNav 
} from './styles';

const Header: React.FC = () => {

    const [show, setShow] = useState<boolean>(false);
    
    const { MainLogo } = images;
    
    return(
        <StyledHeader>
            <StyledContainer>
                <Image src={MainLogo} alt='main-logo' title='LeasingCar' width={200} height={35}/>
                <p>лизинговая компания</p> 
            </StyledContainer>
            <StyledContainer>
                <StyledNav>
                    <span onClick={() => setShow(!show)}>Лизинг</span>
                    <span>Каталог</span>
                    <span>О нас</span>
                    {
                        show && <Dropdown/>
                    }
                </StyledNav>
                <StyledButton>
                    Оставить заявку
                </StyledButton>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;