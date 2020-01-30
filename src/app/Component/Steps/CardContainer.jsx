import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		marginBottom: '20px',
		flex: 1,
		display: 'flex'
	},
	card_content: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export const CardContainer = ({ step }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent className={classes.card_content}>{step}</CardContent>
		</Card>
	);
};

CardContainer.propTypes = {
	step: PropTypes.object
};
