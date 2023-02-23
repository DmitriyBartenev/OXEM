import React from "react";
import Image from "next/image";

import { images } from "public/_index";

import { 
    StyledSliderContainer, 
    StyledButton,
    StyledTextContainer 
} from './styles';

const Slider: React.FC = () => {

    const { Slider } = images;
    
    return(
        <StyledSliderContainer>
            <StyledTextContainer>
                <h1>Авто в лизинг для физических лиц</h1>
                <p>Получите машину за 5 дней</p>
                <StyledButton>
                    Оставить заявку
                </StyledButton>
            </StyledTextContainer>
            <Image src={Slider} alt='car image' title='car' width={841} height={472}/>
        </StyledSliderContainer>
    )
}

export default Slider;