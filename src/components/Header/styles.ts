import styled from 'styled-components';

const white = '#FFFFFF';
const orange = '#FF9514';
const gray = '#C4C4C4';
const blackP = 'rgba(17, 17, 17, 0.5)';
const blackA = '#575757';
const dropdownBlack = '#111111';
const dropdownBorder = '#F3F3F4';
const lightGray = '#F1F1F1';
const lightOrange = '#FFA83D';

export const StyledHeader = styled.header`
	width: 100%;
	height: 90px;
	padding: 21px 48px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.burger {
		cursor: pointer;
		display: none;
	}
	@media screen and (max-width: 1024px) {
		.burger {
			display: block;
		}
	}
`;

export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	img {
		padding-right: 18px;
		border-right: solid 1px ${gray};
	}
	p {
		margin-left: 17px;
		line-height: 150%;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 1px;
		color: ${blackP};
	}
`;

export const StyledNavbar = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export const StyledNav = styled.nav`
	position: relative;
	span {
		margin: 6px 16px;
		font-size: 16px;
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
	margin-left: 24px;
	transition: 0.2s;
	:hover {
		background-color: ${orange};
		color: ${white};
	}
	:active {
		background-color: ${lightOrange};
	}
`;

export const StyledDropdown = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
	background-color: ${white};
	z-index: 2;
	padding: 8px 0;
	border: solid 1px ${dropdownBorder};
	border-radius: 15px;
	-webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
	box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
	@keyframes showDropdown {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	animation-name: showDropdown;
	animation-duration: 1s;
	ul {
		list-style: none;
		color: ${dropdownBlack};
		li {
			padding: 8px 16px;
			cursor: pointer;
			:hover {
				background-color: ${lightGray};
			}
		}
	}
`;
