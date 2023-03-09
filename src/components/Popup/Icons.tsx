import React from "react";

import { StyledIcons } from "./styles";

import { icons } from "public/_index";

const Icons: React.FC = () => {
    
    const { WhatsappIcon, TelegramIcon } = icons;

    return(
        <StyledIcons>
            <WhatsappIcon/>
            <TelegramIcon/>
        </StyledIcons>
    )
}

export default Icons;