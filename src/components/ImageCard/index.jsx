import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '300px'
    },
    text: {
        textAlign: 'center'
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