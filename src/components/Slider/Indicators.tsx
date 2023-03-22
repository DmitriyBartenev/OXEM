import React from 'react';

import { StyledIndicators } from './styles';

interface IndicatorsProps {
	currentIndex: number;
}

const Indicators: React.FC<IndicatorsProps> = ({ currentIndex }) => {
	const dotStyles = Array.from({ length: 5 }, (_, i) => {
		return {
			width: currentIndex === i ? '12px' : '6px',
			height: currentIndex === i ? '12px' : '6px',
			opacity: currentIndex === i ? '1' : '0.5',
		};
	});

	return (
		<StyledIndicators>
			{dotStyles.map((style, id) => (
				<span key={id} style={style} />
			))}
		</StyledIndicators>
	);
};

export default Indicators;
