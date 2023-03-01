import React from "react";

import { icons } from "public/_index";

import { StyledActions } from "./styles";

interface IndicatorsProps {
    currentIndex: number,
    setCurrentIndex: (elem: number) => void
}

const Indicators: React.FC<IndicatorsProps> = ({ currentIndex, setCurrentIndex }) => {
    
    const { Arrow } = icons;

    return(
        <StyledActions>
            <button onClick={() => setCurrentIndex((currentIndex + 5 - 1) % 5)}>
                <Arrow />
            </button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % 5)}>
                <Arrow />
            </button>
        </StyledActions>
    )
}

export default Indicators;