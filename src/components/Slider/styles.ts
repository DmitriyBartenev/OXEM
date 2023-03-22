import styled from 'styled-components';

const white = '#FFFFFF';
const darkBlack = '#000000';
const black = '#111111';
const orange = '#FF9514';
const gray = '#575757';

export const StyledSliderContainer = styled.section`
	margin: 0 48px;
	height: 473px;
	background-color: ${darkBlack};
	border-radius: 32px;
	display: flex;
	position: relative;
`;

export const StyledTextContainer = styled.div`
	position: relative;
	z-index: 2;
	padding: 70px 0 0 70px;
	color: ${white};
	font-weight: 400;
	h1 {
		font-size: 54px;
		line-height: 90%;
		max-width: 585px;
	}
	p {
		font-size: 30px;
		line-height: 36px;
		font-weight: 600;
		margin: 32px 0 24px;
	}
	@media screen and (max-width: 1024px) {
		width: 100%;
		padding: 70px 0 0 70px;
	}
	@media screen and (max-width: 796px) {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0;
		h1 {
			font-size: 36px;
		}
		p {
			font-size: 20px;
		}
	}
`;

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
	transition: 0.2s;
	:hover {
		background-color: ${black};
	}
	:active {
		background-color: ${gray};
	}
`;

export const StyledSlider = styled.div`
	img {
		position: absolute;
		right: 0;
		top: 0;
		border-radius: 0 32px 32px 0;
		object-fit: cover;
		opacity: 0;
		transition: opacity ease-in-out 0.4s;
	}
	.active-img {
		opacity: 1;
	}
	@media (max-width: 1024px) {
		img {
			width: 100%;
			border-radius: 32px;
		}
	}
`;

export const StyledSliderActions = styled.div`
	position: absolute;
	z-index: 2;
	right: 0;
	padding: 0 44px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 800px;
	height: 48px;
	bottom: 44px;
	span {
		color: ${white};
	}
	@media (max-width: 968px) {
		width: 100%;
		justify-content: center;
		padding: 0;
	}
`;

export const StyledIndicators = styled.div`
	width: 134px;
	height: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		width: 6px;
		height: 6px;
		background-color: ${white};
		opacity: 0.5;
		border-radius: 50%;
	}
`;

export const StyledActions = styled.div`
	min-width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		background-color: transparent;
		border: none;
		:first-child {
			svg {
				transform: rotate(180deg);
			}
		}
	}
	svg {
		cursor: pointer;
		width: 24px;
		height: 24px;
		color: ${white};
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.2s;
		@keyframes countdown {
			from {
				stroke-dashoffset: 0px;
			}
			to {
				stroke-dashoffset: 113px;
			}
		}
		path:nth-child(1) {
			stroke-dasharray: 113px;
			stroke-dashoffset: 0px;
			animation: countdown 5s linear infinite forwards;
		}
		:hover {
			width: 48px;
			height: 48px;
		}
	}
	@media (max-width: 968px) {
		display: none;
	}
`;
