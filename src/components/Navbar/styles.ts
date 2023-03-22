import styled from 'styled-components';

const blackA = '#575757';
const white = '#FFFFFF';
const orange = '#FF9514';
const lightOrange = '#FFA83D';

export const StyledNavbarMenu = styled.div`
	position: fixed;
	z-index: 5;
	background-color: #00000050;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	@media screen and (min-width: 1024px) {
		display: none;
	}
	@keyframes showNavbar {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
	animation-name: showNavbar;
	animation-duration: 1s;
`;

export const StyledNavbar = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	background-color: ${white};
	height: 100vh;
	padding: 64px 44px 44px;
`;

export const StyledCloseButton = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: transparent;
	cursor: pointer;
	right: 32px;
	top: 24px;
	svg {
		color: transparent;
		path {
			color: #000;
		}
	}
`;

export const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	span {
		margin-bottom: 24px;
		font-size: 24px;
		font-weight: 700;
		line-height: 24px;
		color: ${blackA};
		position: relative;
		cursor: pointer;
		::after {
			content: '';
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
		:hover::after {
			opacity: 1;
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}
`;

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
	transition: 0.2s;
	:hover {
		background-color: ${orange};
		color: ${white};
	}
	:active {
		background-color: ${lightOrange};
	}
`;
