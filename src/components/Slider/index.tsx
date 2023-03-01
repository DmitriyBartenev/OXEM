import React, { useState, useEffect } from "react";
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

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const { Mercedes, Audi, Bmw, Chevrolet, Porsche } = images;
    const { Arrow } = icons;

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

    const sliderImages = {
        Mercedes,
        Audi,
        Bmw,
        Chevrolet,
        Porsche
    }

    const dotStyles = Array.from({ length: 5 }, (_, i) => {
        return {
            width: currentIndex === i ? '12px' : '6px',
            height: currentIndex === i ? '12px' : '6px',
            opacity: currentIndex === i ? '1' : '0.5'
        }
    });

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
                    <StyledIndicators>
                        {
                            dotStyles.map((style, id) => (
                                <span key={id} style={style}/>
                            ))
                        }
                    </StyledIndicators>
                    <StyledActions>
                        <button onClick={() => setCurrentIndex((currentIndex + 5 - 1) % 5)}>
                            <Arrow />
                        </button>
                        <button onClick={() => setCurrentIndex((currentIndex + 1) % 5)}>
                            <Arrow />
                        </button>
                    </StyledActions>
                </StyledSliderActions>
            </StyledSlider>
        </StyledSliderContainer>
    )
}

export default Slider;