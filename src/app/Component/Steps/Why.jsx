import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		justifyContent: 'space-between',
		backgroundColor: theme.palette.background.paper
	},
	listItemTextLeft: {
		fontSize: '5em',
		color: '#4CAF50',
		display: 'flex',
		justifyContent: 'flex-start'
	},
	listItemTextCenter: {
		fontSize: '5em',
		color: '#4CAF50',
		display: 'flex',
		justifyContent: 'center'
	},
	listItemTextRight: {
		fontSize: '5em',
		color: '#4CAF50',
		display: 'flex',
		justifyContent: 'flex-end'
	}
}));

export const Why = () => {
	const classes = useStyles();

	return (
		<List className={classes.root} component='nav'>
			<ListItem>
				<ListItemText
					classes={{ primary: classes.listItemTextLeft }}
					primary='Fighting regressions'
				/>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText
					classes={{ primary: classes.listItemTextCenter }}
					component='nav'
					primary='Inbuilt tool'
				/>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText
					classes={{ primary: classes.listItemTextRight }}
					component='nav'
					primary='Fast process'
				/>
			</ListItem>
		</List>
	);
};
