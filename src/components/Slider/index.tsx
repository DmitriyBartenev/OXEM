import React, { useState, useEffect } from "react";
import Image from "next/image";

import Actions from "./Actions";
import Indicators from "./Indicators";

import { 
    StyledSliderContainer, 
    StyledButton,
    StyledTextContainer,
    StyledSlider,
    StyledSliderActions
    
} from './styles';

import { images } from "public/_index";

const Slider: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const { Mercedes, Audi, Bmw, Chevrolet, Porsche } = images;

    const sliderImages = { Mercedes, Audi, Bmw, Chevrolet, Porsche }; 
    
    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentIndex(prev => {
            if (prev >= 4) {
                return 0;
            } else {
                return prev + 1;
            }
            });
        }, 5000);
      
        return () => clearInterval(interval);
    }, []);

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
                <Image 
                    src={Object.values(sliderImages)[currentIndex]} 
                    alt='car image' 
                    title='car' 
                    width={800} 
                    height={473}
                    />
                <StyledSliderActions>
                    <Indicators 
                        currentIndex={currentIndex}/>
                    <Actions 
                        currentIndex={currentIndex} 
                        setCurrentIndex={setCurrentIndex}/>
                </StyledSliderActions>
            </StyledSlider>
        </StyledSliderContainer>
    )
}

export default Slider;