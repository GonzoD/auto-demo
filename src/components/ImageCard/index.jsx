import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '300px'
    },
    text: {
        textAlign: 'center',
        color: '#30D171',
        fontWeight: 600,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
    },
}));

const ImageCard = (props) => {
    const classes = useStyles()

    return <div className={`${classes.root} ${props.className}`}>
        <img className={classes.img} src={props.img} alt="imh" />
        <Typography className={classes.text}>{props.textImg}</Typography>
    </div>
}

export default ImageCard