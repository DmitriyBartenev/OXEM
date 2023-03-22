import React from 'react';

import { StyledSubmit } from './styles';

interface SubmitBoxProps {
	isSuccessful: boolean;
}

const SubmitBox: React.FC<SubmitBoxProps> = ({ isSuccessful }) => {
	return (
		<StyledSubmit>
			<p>
				Нажимая на кнопку «Оставить заявку», я даю согласие{' '}
				<span>на обработку персональных данных</span>
			</p>
			<button type="submit" disabled={isSuccessful}>
				Оставить заявку
			</button>
		</StyledSubmit>
	);
};

export default SubmitBox;
