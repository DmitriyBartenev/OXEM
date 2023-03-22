import * as yup from 'yup';

const phoneRegExp = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
const nameRegExp = /^[А-Яа-яA-Za-z\s]+$/;

export const schema = yup.object().shape({
	phoneNumber: yup
		.string()
		.required('Phone field is a required')
		.matches(phoneRegExp, 'Phone number is not valid'),
	name: yup
		.string()
		.required('Name field is a required')
		.matches(nameRegExp, 'Name is not valid'),
});
