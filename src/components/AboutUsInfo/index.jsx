import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: '10%',
        backgroundColor: '#FFFFFFCC',
        width: '50%',
    },
    header: {
        marginBottom: '14px'
    },
    headerBigScreen: {fontSize: '25px'},
    headerMobile: {fontSize: '15px'},
    infoBigScreen: {fontSize: '20px'},
    infoMobile: {fontSize: '10px'}
}));

const AboutUsInfo = () => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div className={classes.root}>
        <Typography className={`${classes.header} ${isTabletOrMobile?classes.headerMobile:classes.headerBigScreen}`}>Обо мне</Typography>
        <Typography className={`${isTabletOrMobile ? classes.infoMobile: classes.infoBigScreen}`}>
        Я занимаюсь обучением будущих водителей более 10 лет. Разработал уникальную программу, которая позволяет научиться водить каждому! 
        Провожу профессиональные занятия для автолюбителей с любым уровнем подготовки на комфортабельном автомобиле Toyota Camry.
        Уроки проходят в доброжелательной обстановке. 
        На них я помогу Вам освоить и отточить навыки вождения на площадке, в плотном городском потоке, 
        научу справляться со сложными ситуациями на дороге, помогу досконально подготовиться к сдаче экзаменов .
        Ситуация на дорогах обсуждается после каждого тренировочного выезда. Подчеркиваются важные моменты экзаменационного маршрута , 
        делаются выводы о том, как нужно вести себя в сложной ситуации.
        Под моим руководством вы научитесь правильно реагировать на сложности, 
        которые нередко возникают не только при сдаче экзаменов, но и в процессе вождения.
        </Typography>    
    </div>
}

export default AboutUsInfo