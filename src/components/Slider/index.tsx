import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
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

import { sliderImages } from "public";

interface SliderProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Slider: React.FC<SliderProps> = ({ setOpenPopup }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
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
                <StyledButton onClick={() => setOpenPopup(true)}>
                    Оставить заявку
                </StyledButton>
            </StyledTextContainer>
            <StyledSlider> 
                {
                    sliderImages.map((img, index) => (
                        <Image 
                        src={img.src} 
                        alt='car'
                        width={800} 
                        height={473}
                        key={img.id}
                        draggable={false}
                        className={currentIndex === index ? 'active-img' : ''}
                        />
                    ))
                }
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