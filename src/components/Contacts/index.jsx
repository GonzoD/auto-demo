import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import ColorButton from '../ColorButton';
import useCopyToClipboard from '../../utils/useCopyToClipboard'
import { number } from '../../utils/constants'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3% 0',
        background: '#1b2957',
        color: '#30D171'
    },
    header: {
        marginBottom: '30px',
        fontSize: '22px'     
    },
    contacts: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
    },
    contactBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        background: '#FF7618'
    },
    buttonBigScreen:{fontSize: '20px', height: '50px',},
    buttonMobile:{fontSize: '10px', height: '20px',
    display: 'flex', 
    alignSelf: 'flex-start'},
    mailButton: {
        color: 'white',
        textTransform: 'none'
    },
    mailButtonBigScreen:{fontSize: '20px', height: '50px',},
    mailButtonMobile:{fontSize: '12px', height: '20px',},
    textBigScreen:{fontSize: '20px'},
    textMobile:{fontSize: '13px'},
}));

const Contacts = () => {
    const classes = useStyles()
    const [isCopied, handleCopy] = useCopyToClipboard();
    const mail = 'ivanov@gmail.com'
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div id='contacts' className={classes.root}>
        <Typography className={classes.header}>Контакты автоинструктора</Typography>
        <div className={classes.contacts}>
        <div className={classes.contactBox}>
            <Typography className={`${isTabletOrMobile ? classes.textMobile : classes.textBigScreen}`}>Свяжитесь со мной по номеру</Typography>
            <ColorButton text={number} style={`${classes.button} ${isTabletOrMobile ? classes.buttonMobile : classes.buttonBigScreen}`} onClick={() => handleCopy(number)}/>
        </div>
        <div className={classes.contactBox}>
            <Typography className={`${isTabletOrMobile ? classes.textMobile : classes.textBigScreen}`}>Моя почта</Typography>
            <Button className={`${classes.mailButton} ${isTabletOrMobile ? classes.mailButtonMobile : classes.mailButtonBigScreen}`} onClick={() => handleCopy(mail)}>{mail}</Button>
        </div>
        </div>
    </div>
}

export default Contacts