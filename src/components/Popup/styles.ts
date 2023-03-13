import styled from "styled-components";

const white = '#FFFFFF';
const lightGray = '#F3F3F4';
const gray = '#828282';
const darkGray = '#575757';
const grayish = '#EAEAEB';
const black = '#111111';
const orange = '#FF9514';
const red = 'rgba(255, 71, 60, 1)';
const paleOrange = 'rgba(255, 149, 20, 0.2)';
const paleRed = 'rgba(255, 99, 89, 0.5)';
const error = '#D53234';
const green = '#77DE8D';

export const StyledPopupBox = styled.div`
    position: fixed;
    z-index: 3;
    background-color: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @keyframes showPopup {
        0% { height: 0 }
        100% { height: 100vh }
    }
    animation-name: showPopup;
    animation-duration: 2s;
`

export const StyledPopupContainer = styled.div`
    width: 100%;
    background-color: ${white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 160px 392px;
    border-radius: 32px 32px 0px 0px;
    position: relative;
    @media (max-width: 768px){
        padding: 120px 20px;
    }
    @media (max-width: 425px){
        padding: 80px 20px;
    }
`

export const StyledPopup = styled.div`
    min-width: 655px;
    h3{
        font-size: 54px;
        line-height: 90%;
        color: ${black};
        font-weight: 400;
    }
    .close{
        color: ${lightGray};
        cursor: pointer;
        position: absolute;
        top: 48px;
        right: 48px;
        transition: .3s;
        background-color: transparent;
        border: none;
        path{
            color: ${gray};
            transition: .3s;
        }
        :hover{
            color: ${gray};
            path{
                color: ${lightGray};
            }
        }
        :active{
            color: ${darkGray};
        }
    }
    p{
        font-size: 16px;
        line-height: 150%;
        color: ${darkGray};
        margin: 24px 0 44px;
        max-width: 466px;
    }
    @media (max-width: 768px){
        min-width: 100%;
    }
`

export const StyledSuccessfulMessage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: ${paleOrange};
    border-radius: 16px;
    font-size: 14px;
    font-weight: 500;
    border: solid 1px ${orange};
    color: ${orange};
`

export const StyledErrorMessage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: ${paleRed};
    border-radius: 16px;
    font-size: 14px;
    font-weight: 500;
    border: solid 1px ${red};
    color: ${red};
`

export const StyledInputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
    }
`

export const StyledInputContainer = styled.div`
    width: 100%;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;    
    position: relative;
    .error{
        border: solid 1px ${error};
    }
    input{
        min-width: 311px;
        min-height: 48px;
        padding: 12px 24px;
        border-radius: 16px;
        background-color: ${lightGray};
        border: solid 1px ${lightGray};
        color: ${darkGray};
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        outline: none;
        ::placeholder{
            color: rgba(87, 87, 87, 0.4);   
        }
        :hover{
            background-color: ${grayish};
        }
        :focus{
            border: solid 1px ${orange};
            box-shadow: 0px 0px 4px 3px rgba(255, 149, 20, 0.5);
            background-color: ${white};
        }
        :disabled{
            opacity: .5;
        }
    }
    p{
        font-size: 12px;
        font-weight: 400;
        color: ${error};
        margin-top: 5px;
        margin-bottom: 0;
    }
    @media (max-width: 768px){
        input{
            width: 100%;
        }
    }
`

export const StyledIcon = styled.span`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px;
    background-color: ${green};
    border-radius: 8px;
    svg{
        position: static;
        cursor: auto;
        path{
            color: ${white};
        }
    }
`

export const StyledSubmit = styled.div`
    padding: 26px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    border: solid 2px ${lightGray}; 
    border-radius: 16px;
    p{
        margin: 0;
        max-width: 351px;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: rgba(17, 17, 17, 0.5);
        span{
            color: ${black};
        }
    }
    button{
        padding: 12px 24px;
        border-radius: 40px;
        background-color: ${orange};
        font-size: 16px;
        font-weight: 700;
        color: ${white};
        line-height: 24px;
        border: solid 1px ${orange};
        cursor: pointer;
        transition: .2s;
        :hover{
            background-color: ${black};
            border: solid 1px ${black};
        }
        :active{
            background-color: ${darkGray};
            border: solid 1px ${darkGray};
        }
        :disabled{
            background-color: rgba(255, 149, 20, 0.4);
            border: solid 1px rgba(255, 149, 20, 0.4);
            cursor: initial;
        }
    }
    @media (max-width: 768px){
        justify-content: center;
        flex-wrap: wrap;
        p{
            max-width: 100%;
            text-align: center;
        }
        button{
            margin-top: 20px;
        }
    }
`

export const StyledIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    svg{
        cursor: pointer;
        margin: 0 8px;
        color: ${lightGray};
        path{
            color: ${darkGray};
        }
    }
`