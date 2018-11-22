import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({ data }) => {
	return (
		<h1>{data}</h1>
	)
}

Component.propTypes = {
	data: PropTypes.string
}
