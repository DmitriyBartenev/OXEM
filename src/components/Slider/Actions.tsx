import React from "react";

import { icons } from "public/_index";

import { StyledActions } from "./styles";

interface ActionsProps {
    currentIndex: number,
    setCurrentIndex: (elem: number) => void
}

const Actions: React.FC<ActionsProps> = ({ currentIndex, setCurrentIndex }) => {
    
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

export default Actions;