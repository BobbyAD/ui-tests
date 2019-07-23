import React, { useState } from 'react';

//material
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepConnector, StepIcon } from '@material-ui/core';

const StepperDots = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState(['', '', ''])

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    const classes = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '80vh',
        },
        stepper: {
            background: 'rgba(0,0,0,0)',
            width: '500px',
        },
    }))();

    const connectorClasses = makeStyles(theme => ({
        connectorActive: {
            '& $connectorLine': {
                borderTop: '8px solid green',
                borderRadius: '2px',
                marginTop: '-2px',
            },
        },
        connectorCompleted: {
            '& $connectorLine': {
                borderTop: '8px solid orange',
                borderRadius: '2px',
                marginTop: '-2px'
            },
        },
        connectorDisabled: {
            '& $connectorLine': {
                borderTop: '8px solid white',
                borderRadius: '2px',
                marginTop: '-2px'
            },
        },
        connectorLine: {
            transition: theme.transitions.create('border-color'),
        },
        connectorRoot: {
            zIndex: 0,
            width: '150px',
            left: 'calc(-50%)'
        }
    }))();

    const stepClasses = makeStyles(theme => ({
        stepRoot: {
            color: 'cyan',
            zIndex: 10
        },
        stepCompleted: {
            color: 'pink'
        },
        stepDisabled: {
            color: 'magenta'
        },
        stepActive: {
            color: 'pink',
        }
    }))();

    const connector = (
        <StepConnector classes={{
            active: connectorClasses.connectorActive,
            completed: connectorClasses.connectorCompleted,
            disabled: connectorClasses.connectorDisabled,
            line: connectorClasses.connectorLine,
            root: connectorClasses.connectorRoot,
        }} />
    )

    return (
        <div className={classes.root}>
            <Stepper className={classes.stepper} activeStep={activeStep} connector={connector} alternativeLabel>
                <Step className={classes.step}>
                    <StepLabel
                        StepIconProps={{
                            classes: {
                                root: stepClasses.stepRoot,
                                completed: stepClasses.stepCompleted,
                                active: stepClasses.stepActive,
                            }
                        }}
                    ></StepLabel>
                </Step>
                <Step className={classes.step}>
                    <StepLabel
                        StepIconProps={{
                            classes: {
                                root: stepClasses.stepRoot,
                                completed: stepClasses.stepCompleted,
                                active: stepClasses.stepActive,
                            }
                        }}
                    ></StepLabel>
                </Step>
                <Step className={classes.step}>
                    <StepLabel
                        StepIconProps={{
                            classes: {
                                root: stepClasses.stepRoot,
                                completed: stepClasses.stepCompleted,
                                active: stepClasses.stepActive,
                            }
                        }}
                    ></StepLabel>
                </Step>
            </Stepper>
            <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    )
}

export default StepperDots
