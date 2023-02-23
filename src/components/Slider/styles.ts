import styled from "styled-components";

const white = '#FFFFFF';
const darkBlack = '#000000';
const orange = '#FF9514';

export const StyledSliderContainer = styled.section`
    margin: 0 48px;
    height: 473px;
    background-color: ${darkBlack};
    border-radius: 32px;
    display: flex;
    img{
        border-radius: 32px;
        height: 100%;
    }
`

export const StyledTextContainer = styled.div`
    padding: 70px 0 0 70px;
    color: ${white};
    font-weight: 400;
    h1{
        font-size: 54px;
        line-height: 90%;
        max-width: 585px;
    }
    p{
        font-size: 30px;
        line-height: 36px;
        font-weight: 600;
        margin: 32px 0 24px;
    }
`

export const StyledButton = styled.button`
    padding: 12px 24px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    background-color: ${orange};
    border: none;
    border-radius: 40px;
    color: ${white};
    cursor: pointer;
`