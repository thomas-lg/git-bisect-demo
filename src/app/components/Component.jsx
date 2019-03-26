import React from 'react';
import PropTypes from 'prop-types';

export const Component = () => {
	return <h1>With Redux and Flow</h1>;
};

Component.propTypes = {
	data: PropTypes.string
};
