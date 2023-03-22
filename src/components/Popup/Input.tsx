import React from 'react';
import { FieldValues } from 'react-hook-form';

import { StyledInputContainer, StyledIcon } from './styles';

import { icons } from 'public';

interface InputProps {
	placeholder: string;
	errors: string | undefined;
	getValues: string;
	register: FieldValues;
	isSuccessful: boolean;
}
const Input: React.FC<InputProps> = ({
	errors,
	placeholder,
	register,
	getValues,
	isSuccessful,
}) => {
	const { CheckIcon } = icons;

	return (
		<StyledInputContainer>
			<input
				type="text"
				placeholder={placeholder}
				{...register}
				className={errors ? 'error' : ''}
				disabled={isSuccessful}
			/>
			{!errors && getValues?.length && (
				<StyledIcon>
					<CheckIcon />
				</StyledIcon>
			)}
			<p>{errors}</p>
		</StyledInputContainer>
	);
};

export default Input;
