import React from 'react';
import { Homepage } from '../../Component/Steps/Homepage';
import { Demo } from '../../Component/Steps/Demo';
import { How } from '../../Component/Steps/How';
import { What } from '../../Component/Steps/What';
import { Why } from '../../Component/Steps/Why';

export const Wizard = () => {
	return (
		<>
			<Homepage />
			<What />
			<Why />
			<How />
			<Demo />
		</>
	);
};
