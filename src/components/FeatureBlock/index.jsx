import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '200px',
        marginLeft: '15px',
    },
    text: {
        marginLeft: '7px',
    },
    header: {
        color: 'white'
    },
    info: {
        fontSize: '14px',
    }
}));


const feature = {
    pro: {
    icon: () => (<HowToRegIcon fontSize='large'/>),
    header: 'Проффесионализм',
    info: 'Подготовка к сложным дорожным ситуациям: выбежал ребенок, упало дерево, резкий маневр'},
    car: {
    icon: () => (<DriveEtaIcon fontSize='large'/>),
    header: 'Большой опыт обучения',
    info: 'Обучением будущих водителей более 10 лет'},
    mood: {
    icon: () => (<SentimentSatisfiedAltIcon fontSize='large'/>),
    header: 'Приятная атмосфера',
    info: 'Обучение происходит в спокойной атмосфере, без стресса и страха для ученика'}
}

const FeatureBlock = (props) => {
    const classes = useStyles()

    return <div className={classes.root}>
        <div>{feature[props.icon].icon()}</div>
        <div className={classes.text}>
        <Typography className={classes.header}>{feature[props.icon].header}</Typography>
        <Typography className={classes.info}>{feature[props.icon].info}</Typography>
        </div> 
    </div>
}

export default FeatureBlock