import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ColorButton from '../ColorButton'
import useCopyToClipboard from '../../utils/useCopyToClipboard'
import { number } from '../../utils/constants'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '30%',
        backgroundImage: 'url(odessa.jpg)',
        justifyContent: 'space-between',
        padding: '3% 5%',
    },
    introText: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20%',
        width: '80%'
    },
    greeting: {
        fontSize: '40px',
        backgroundColor: '#3d4961',
    },
    greetingBigScreen:{fontSize: '40px',},
    greetingMobile:{fontSize: '17px'},
    intro: {
        color: 'white',
        marginTop: '5px',
        fontSize: '20px',
        backgroundColor: '#3d4961',
    },
    introBigScreen:{fontSize: '20px',},
    introMobile:{fontSize: '11px'},
    button: {
        marginTop: '25%',
        background: '#FF7618'
    },
    buttonBigScreen:{fontSize: '20px', height: '50px',},
    buttonMobile:{fontSize: '10px', height: '20px',},
}));

const Introduction = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [isCopied, handleCopy] = useCopyToClipboard();

    return <div id='intro' className={`${classes.root} ${props.className}`}>
        <div className={classes.introText}>
            <Typography className={`${classes.greeting} ${isTabletOrMobile? classes.greetingMobile: classes.greetingBigScreen}`}>Профессиональный автоинструктор</Typography>
            <Typography className={`${classes.intro} ${isTabletOrMobile? classes.introMobile: classes.introBigScreen}`}>
                Здравствуйте! Меня зовут Виталий, я проффесиональный автоинструктор по вождению в городе Одесса.
                За эти немалые годы я, как инструктор, обучил более 1000 человек на автомате и приобрел огромный опыт для того, чтобы создать универсальную методику обучения.
            </Typography>
        </div>
        <ColorButton text={number} style={`${classes.button} ${isTabletOrMobile? classes.buttonMobile: classes.buttonBigScreen}`} onClick={() => handleCopy(number)}/>
    </div>
}

export default Introduction