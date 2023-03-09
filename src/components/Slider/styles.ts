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
    transition: .2s;
    :hover{
        background-color: ${white};
        color: ${darkBlack};
    }
`

export const StyledSlider = styled.div`
    position: relative;
    img{
        opacity: .8;
        height: 100%;
        width: 100% 100%;
        border-radius: 32px;
        border-bottom-left-radius:  0;
        border-top-left-radius:  0;
    }
`

export const StyledSliderActions = styled.div`
    position: absolute;
    padding: 0 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    bottom: 44px;
    span{
        color: ${white};
    }
`

export const StyledIndicators = styled.div`
    width: 134px;
    height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        width: 6px;
        height: 6px;
        background-color: ${white};
        opacity: .5;
        border-radius: 50%;
    }
`

export const StyledActions = styled.div`
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        background-color: transparent;
        border: none;
    }
    svg{
        cursor: pointer;
        width: 24px;
        height: 24px;
        color: ${white};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s;
        transform: rotateY(-360deg) rotateZ(-90deg);
        @keyframes countdown {
            from {
                stroke-dashoffset: 0px;
            }
            to{
                stroke-dashoffset: 113px;
            }
        }
        path:nth-child(2){
            stroke-dasharray: 113px;
            stroke-dashoffset: 0px;
            stroke-linecap: round;
            color: white;
            animation: countdown 5s linear infinite forwards;
        }
        :hover{
            width: 48px;
            height: 48px;
        }
    }
`