import styled from "styled-components";

const darkBlack = '#111111';
const gray = '#575757';
const lightGray = '#F3F3F4';
const inputRange = '#E1E1E1';
const orange = '#FF9514';

export const StyledContainer = styled.section`
    margin: 100px 48px 0;
    h3{
        font-size: 54px;
        line-height: 90%;
        color: ${darkBlack};
        font-weight: 700;
        max-width: 753px;
        margin-bottom: 32px;
    }
`

export const StyledCalculatorBox = styled.div`
    display: flex;
    flex-direction: column;
    label{
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        color: ${gray};
        margin-bottom: 24px;
    }
    input{
        max-width: 427px;
    }
`

export const StyledInputWrapper = styled.div`
    height: 25px;
`

export const StyledTextInput = styled.input`
    min-height: 68px;
    border: none;
    border-radius: 16px;
    background-color: ${lightGray};
    padding: 16px 24px;
    font-size: 30px;
    line-height: 36px;
    color: ${gray};
    outline: none;
`

export const StyledRangeInput = styled.input`
    -webkit-appearance: none;
    height: 3px;
    width: 100%;
    background: #ddd;
    border-radius: 15px;
    border: none;
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: orange;
        cursor: pointer;
    }
`