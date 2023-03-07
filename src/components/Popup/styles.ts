import styled from "styled-components";

const white = '#FFFFFF';
const lightGray = '#F3F3F4';
const gray = '#828282';
const darkGray = '#575757';
const black = '#111111';
const orange = '#FF9514';
const red = 'rgba(255, 71, 60, 1)';
const paleOrange = 'rgba(255, 149, 20, 0.2)';
const paleRed = 'rgba(255, 99, 89, 0.5)';

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
    @keyframes hidePopup {
        100% {height: 0}
        0% {height: 100vh}
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
`

export const StyledPopup = styled.div`
    min-width: 655px;
    h3{
        font-size: 54px;
        line-height: 90%;
        color: ${black};
        font-weight: 400;
    }
    svg{
        color: ${lightGray};
        cursor: pointer;
        position: absolute;
        top: 48px;
        right: 48px;
        transition: .3s;
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
    }
    p{
        font-size: 16px;
        line-height: 150%;
        color: ${darkGray};
        margin: 24px 0 44px;
        max-width: 466px;
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
    input{
        min-width: 311px;
        min-height: 48px;
        padding: 12px 24px;
        border-radius: 16px;
        background-color: ${lightGray};
        border: none;
        color: ${darkGray};
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        ::placeholder{
            color: rgba(87, 87, 87, 0.4);   
        }
    }
`

export const StyledInputContainer = styled.div`
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        font-size: 12px;
        font-weight: 400;
        color: ${gray};
        margin-top: 5px;
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
            background-color: ${white};
            color: ${darkGray};
            border: solid 1px ${darkGray};
        }
    }
`

export const StyledIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    svg{
        margin: 0 8px;
        position: static;
    }
`