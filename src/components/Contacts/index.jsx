import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import ColorButton from '../ColorButton';
import useCopyToClipboard from '../../utils/useCopyToClipboard'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 30px',
        background: '#20262E',
        color: '#30D171'
    },
    header: {
        marginBottom: '30px'
    },
    contacts: {
        display: 'flex'
    },
    contactBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        alignItems: 'center'
    },
}));

const Contacts = () => {
    const classes = useStyles()
    const [isCopied, handleCopy] = useCopyToClipboard();
    const mail = 'ivanov@gmail.com'
    const number = '0994838737'

    return <div id='contacts' className={classes.root}>
        <Typography className={classes.header}>Контакты автоинструктора</Typography>
        <div className={classes.contacts}>
        <div className={classes.contactBox}>
            <Typography>Свяжитесь со мной по номеру</Typography>
            <ColorButton text={number} style={classes.button} onClick={() => handleCopy(number)}/>
        </div>
        <div className={classes.contactBox}>
            <Typography>Моя почтка</Typography>
            <Button onClick={() => handleCopy(mail)}>{mail}</Button>
        </div>
        </div>
    </div>
}

export default Contacts