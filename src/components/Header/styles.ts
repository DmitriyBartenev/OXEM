import styled from 'styled-components';

const white = '#FFFFFF';
const orange = '#FF9514';
const gray = '#C4C4C4';
const blackP = 'rgba(17, 17, 17, 0.5)';
const blackA = '#575757';

export const StyledHeader = styled.header`
    width: 100%;
    height: 90px;
    padding: 21px 48px;
    display: flex;
    justify-content: space-between;
`

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    img{
        padding-right: 18px;
        border-right: solid 1px ${gray};
    }
    p{
        margin-left: 17px;
        line-height: 150%;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
        color: ${blackP};
    }
`
    
export const StyledNav = styled.nav`
    a{
        margin: 6px 16px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: ${blackA};  
        position: relative;    
        ::after{
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${blackA};
            opacity: 0;
            transition: opacity 0.2s ease-out, transform 0.2s ease-out;
            transform: scaleX(0);
            transform-origin: bottom right;
        }
        :hover::after{
            opacity: 1;
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`

export const StyledButton = styled.button`
    padding: 12px 24px;
    background-color: ${white};
    color: ${orange};
    border: 1px solid ${orange};
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin-left: 24px;
    transition: .2s;
    :hover{
        background-color: ${orange};
        color: ${white};
    }
`