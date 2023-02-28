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

export const StyledSlider = styled.div`
    position: relative;
`

export const StyledSliderActions = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 48px;
    bottom: 44px;
    right: 0;
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
        :hover{
            width: 12px;
            height: 12px;
            opacity: 1;
        }
    }
`

export const StyledActions = styled.div`
    width: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        width: 24px;
        height: 24px;
        background-color: transparent;
        border-radius: 50%;
        border: solid 2px ${white};
        color: ${white};
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: .5;
        transition: .1s;
        :hover{
            width: 48px;
            height: 48px;
            opacity: 1;
        }
        :first-child{
            svg{
                transform: rotate(180deg);
            }
        }
    }
`