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
        padding: 6px 16px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: ${blackA};       
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
`