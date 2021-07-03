import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ColorButton from '../ColorButton'
import useCopyToClipboard from '../../utils/useCopyToClipboard'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '700px',
        backgroundImage: 'url(odessa.jpg)',
        justifyContent: 'space-around',
        padding: '25px 50px',
    },
    introText: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '25%',
        width: '1200px',
    },
    greeting: {
        fontSize: '45px',
        backgroundColor: '#3d4961',
        width: '100%',
    },
    intro: {
        color: 'white',
        marginTop: '5px',
        fontSize: '25px',
        backgroundColor: '#3d4961',
    },
    button: {
        marginTop: '30%',
        height: '50px',
    },
}));

const Introduction = (props) => {
    const classes = useStyles()
    const [isCopied, handleCopy] = useCopyToClipboard();
    const text = 'hello'

    return <div id='intro' className={`${classes.root} ${props.className}`}>
        <div className={classes.introText}>
            <Typography className={classes.greeting}>Профессиональный автоинструктор</Typography>
            <Typography className={classes.intro}>
                Здравствуйте! Меня зовут Виталий, я проффесиональный автоинструктор по вождению в городе Одесса.
                За эти немалые годы я, как инструктор, обучил более 1000 человек на автомате и приобрел огромный опыт для того, чтобы создать универсальную методику обучения.
            </Typography>
        </div>
        <ColorButton text={text} style={classes.button} onClick={() => handleCopy(text)}/>
    </div>
}

export default Introduction