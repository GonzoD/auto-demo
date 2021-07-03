import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: '10%',
        backgroundColor: 'white',
        width: '600px',
    },
    header: {
        fontSize: '25px',
        marginBottom: '14px'
    },
}));

const AboutUsInfo = () => {
    const classes = useStyles()

    return <div className={classes.root}>
        <Typography className={classes.header}>Обо мне</Typography>
        <Typography className={classes.info}>
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