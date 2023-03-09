import React from "react";

import { icons } from "public/_index";

import { StyledActions } from "./styles";

interface ActionsProps {
    currentIndex: number,
    setCurrentIndex: (elem: number) => void
}

const Actions: React.FC<ActionsProps> = ({ currentIndex, setCurrentIndex }) => {
    
    const { Circle } = icons;

    return(
        <StyledActions>
            <button onClick={() => setCurrentIndex((currentIndex + 5 - 1) % 5)}>
                <Circle/>
            </button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % 5)}>
                <Circle/>
            </button>
        </StyledActions>
    )
}

export default Actions;