import React from 'react';

import { StyledDropdown } from './styles';

const Dropdown: React.FC = () => {
	return (
		<StyledDropdown>
			<ul>
				<li>Для личного пользования</li>
				<li>Для юридических лиц</li>
				<li>Калькулятор</li>
			</ul>
		</StyledDropdown>
	);
};

export default Dropdown;
