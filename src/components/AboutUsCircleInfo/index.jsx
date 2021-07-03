import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '130px',
    },
    circle: {      
        width: '50px',
        height: '50px',
        border: '2px solid white',
        borderRadius: '30px'
    },
    amount: {
        textAlign: 'center'
    },
    info: {
        textAlign: 'center',
        width: '130px'
    },
}));

const AboutUsCircleInfo = (props) => {
    const classes = useStyles()

    return <div className={classes.root}>
        <div className={classes.circle}>
            <Typography className={classes.amount}>{props.amount}</Typography></div>
        <Typography className={classes.info}>{props.info}</Typography>
    </div>
}

export default AboutUsCircleInfo