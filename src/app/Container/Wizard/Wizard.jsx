/* eslint-disable no-magic-numbers */
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { CardContainer } from '../../Component/Steps/CardContainer';
import { Demo } from '../../Component/Steps/Demo';
import { Homepage } from '../../Component/Steps/Homepage';
import { How } from '../../Component/Steps/How';
import { What } from '../../Component/Steps/What';
import { Why } from '../../Component/Steps/Why';
import styles from './Wizard.scss';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4CAF50',
			contrastText: '#fff'
		}
	},
	MuiButton: {
		raisedPrimary: {
			color: 'white'
		}
	}
});

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%'
	},
	button: {
		marginRight: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	}
}));

function getSteps() {
	return ['Homepage', 'What', 'Why', 'How', 'Demo'];
}

const getStepContent = step => {
	switch (step) {
		case 0:
			return <Homepage />;
		case 1:
			return <What />;
		case 2:
			return <Why />;
		case 3:
			return <How />;
		case 4:
			return <Demo />;
		default:
			return;
	}
};

export const Wizard = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	return (
		<ThemeProvider theme={theme}>
			<Stepper activeStep={activeStep}>
				{steps.map(label => {
					const stepProps = {};
					const labelProps = {};
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<>
				<CardContainer step={getStepContent(activeStep)} />
				<div className={styles.buttons}>
					<Button
						disabled={activeStep === 0}
						onClick={handleBack}
						className={classes.button}
					>
						Back
					</Button>
					{activeStep !== steps.length - 1 && (
						<Button
							variant='contained'
							color='primary'
							onClick={handleNext}
							className={classes.button}
						>
							Next
						</Button>
					)}
				</div>
			</>
		</ThemeProvider>
	);
};
