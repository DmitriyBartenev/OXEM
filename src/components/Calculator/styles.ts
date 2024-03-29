import styled from 'styled-components';

const darkBlack = '#111111';
const gray = '#575757';
const lightGray = '#F3F3F4';
const darkGray = '#EBEBEC';
const white = '#FFFFFF';
const orange = '#FF9514';

export const StyledContainer = styled.section`
	margin: 100px 48px 0;
	color: ${gray};
	h3 {
		font-size: 54px;
		line-height: 90%;
		color: ${darkBlack};
		font-weight: 700;
		max-width: 753px;
		margin-bottom: 32px;
	}
	@media (max-width: 768px) {
		margin: 100px 15px 0;
	}
`;

export const StyledButton = styled.button`
	font-size: 30px;
	line-height: 36px;
	font-weight: 700;
	color: ${white};
	padding: 16px 93px;
	background-color: ${orange};
	border-radius: 40px;
	border: solid 1px ${orange};
	cursor: pointer;
	letter-spacing: 1px;
	transition: 0.2s;
	:hover {
		background-color: ${darkBlack};
		border: solid 1px ${darkBlack};
	}
	:active {
		background-color: ${gray};
		border: solid 1px ${gray};
	}
	@media (max-width: 1440px) {
		margin-top: 44px;
	}
	@media (max-width: 500px) {
		padding: 8px 45px;
		font-size: 22px;
	}
	@media (max-width: 375px) {
		padding: 8px 25px;
		font-size: 22px;
	}
`;

export const StyledInputs = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: 1024px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const StyledCalculatedValue = styled.div`
	margin-top: 44px;
	margin-bottom: 137px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1440px) {
		flex-wrap: wrap;
	}
`;

export const StyledCalculatorBox = styled.div`
	display: flex;
	flex-direction: column;
	label {
		font-size: 16px;
		line-height: 20px;
		font-weight: 400;
		margin-bottom: 24px;
	}
	input {
		width: 427px;
		font-weight: 700;
	}
	@media (max-width: 1440px) {
		width: 100%;
		input {
			width: 100%;
		}
		label {
			margin-top: 32px;
		}
	}
`;

export const StyledRangeInputBox = styled.div`
	height: 25px;
`;

export const StyledInputTextBox = styled.div`
	position: relative;
	width: 427px;
	height: 68px;
	span {
		position: absolute;
		top: 7px;
		right: 7px;
		font-size: 24px;
		line-height: 36px;
		font-weight: 600;
		width: 72px;
		height: 54px;
		background-color: ${darkGray};
		border-radius: 16px;
		padding: 15px 17px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: 0.2s;
		:hover {
			background-color: ${gray};
			color: ${white};
		}
	}
	@media (max-width: 1440px) {
		width: 100%;
	}
`;

export const StyledInputText = styled.input`
	height: 68px;
	border: none;
	border-radius: 16px;
	background-color: ${lightGray};
	padding: 16px 90px 16px 24px;
	font-size: 30px;
	line-height: 36px;
	color: ${gray};
	outline: none;
`;

export const StyledInputRange = styled.input`
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
`;

export const StyledCalculatedBox = styled.div`
	width: 300px;
	p {
		font-size: 16px;
		line-height: 150%;
	}
	span {
		font-size: 54px;
		font-weight: 800;
		padding-top: 8px;
	}
	:last-child {
		margin-left: 75px;
	}
	@media (max-width: 768px) {
		p {
			margin-top: 20px;
			width: 100%;
		}
		:last-child {
			margin-left: 0px;
		}
	}
	@media (max-width: 500px) {
		span {
			font-size: 40px;
		}
	}
`;

export const StyledCalculated = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 1440px) {
		width: 100%;
	}
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
