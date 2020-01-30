import React from 'react';
import { Homepage } from '../../Component/Steps/Homepage';
import { Demo } from '../../Component/Steps/Demo';
import { How } from '../../Component/Steps/How';
import { What } from '../../Component/Steps/What';
import { Why } from '../../Component/Steps/Why';
import { CardContainer } from '../../Component/Steps/CardContainer';

export const Wizard = () => {
	return (
		<>
			<CardContainer step={<Homepage />} />
			<CardContainer step={<What />} />
			<CardContainer step={<Why />} />
			<CardContainer step={<How />} />
			<CardContainer step={<Demo />} />
		</>
	);
};
