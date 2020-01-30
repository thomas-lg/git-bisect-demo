import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'space-between'
	},
	center: {
		alignItems: 'center'
	},
	powered: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export const Homepage = () => {
	const classes = useStyles();

	return (
		<div className={classes.container + ' ' + classes.center}>
			<Typography variant='h1'>Demo project for git-bisect</Typography>
			<Typography variant='h3' component='h3'>
				<a href='https://github.com/thomas-lg/git-bisect-demo'>
					https://github.com/thomas-lg/git-bisect-demo
				</a>
			</Typography>
		</div>
	);
};
