import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ColorButton from '../ColorButton';
import useCopyToClipboard from '../../utils/useCopyToClipboard'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#1b2957',
        padding: '20px 0'
    },
    header: {
        fontSize: '20px'
    },
    title: {
        fontSize: '17px',
        marginTop: '5px',
        marginBottom : '25px'
    },
}));

const ContactAd = () => {
    const classes = useStyles()
    const [isCopied, handleCopy] = useCopyToClipboard();
    const text = 'hello'

    return <div className={classes.root}>
        <Typography className={classes.header}>Хочешь научиться водить?</Typography>
        <Typography className={classes.title}>Кликай по номеру и звони Виталию</Typography>
        <ColorButton text={text} onClick={() => handleCopy(text)}/>
    </div>
}

export default ContactAd