import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root:{
    },
}));

const ColorButton = (props) => {
    const classes = useStyles()
    return <Button variant="contained" onClick={props.onClick} className={`${classes.root} ${props.style}`}>{props.text}</Button>
}

export default ColorButton