import React from "react";
import Image from "next/image";

import { images, icons } from "public/_index";

import { 
    StyledSliderContainer, 
    StyledButton,
    StyledTextContainer,
    StyledSlider,
    StyledIndicators,
    StyledActions,
    StyledSliderActions
} from './styles';

const Slider: React.FC = () => {

    const { Slider } = images;
    const { Arrow } = icons;

    return(
        <StyledSliderContainer>
            <StyledTextContainer>
                <h1>Авто в лизинг для физических лиц</h1>
                <p>Получите машину за 5 дней</p>
                <StyledButton>
                    Оставить заявку
                </StyledButton>
            </StyledTextContainer>
            <StyledSlider>
                <Image src={Slider} alt='car image' title='car' width={841} height={472}/>
                <StyledSliderActions>
                    <StyledIndicators>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </StyledIndicators>
                    <StyledActions>
                        <button>
                            <Arrow/>
                        </button>
                        <button>
                            <Arrow/>
                        </button>
                    </StyledActions>
                </StyledSliderActions>
            </StyledSlider>
        </StyledSliderContainer>
    )
}

export default Slider;