import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import git_pic from '../../../assets/images/git.png';
import material_pic from '../../../assets/images/material.png';
import react_pic from '../../../assets/images/react.png';
import webpack_pic from '../../../assets/images/webpack.png';

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
			<Typography style={{ color: '#4CAF50' }} variant='h1'>
				git-bisect
			</Typography>
			<Typography variant='h3' component='h3'>
				<a href='https://github.com/thomas-lg/git-bisect-demo'>
					https://github.com/thomas-lg/git-bisect-demo
				</a>
			</Typography>
			<Typography className={classes.powered} variant='body2' component='div'>
				<Typography variant='h4' component='div'>
					Powered by
				</Typography>
				<Typography variant='body2' component='div'>
					<img style={{ width: '60px' }} src={react_pic} alt='' />
					<img style={{ width: '50px' }} src={material_pic} alt='' />
					<img style={{ width: '50px' }} src={webpack_pic} alt='' />
					<img style={{ width: '50px' }} src={git_pic} alt='' />
				</Typography>
			</Typography>
		</div>
	);
};
