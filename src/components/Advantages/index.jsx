import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px'
    },
    header: {
        fontSize: '20px'
    },
    cardRow: {
        display: 'flex',
        justifyContent: 'center'
    },
    box: {
        margin: '15px 15px'
    },
}));

const CardRow = [{img: 'parking.jpg', text: 'Все возможные виды парковки'}, 
{img: 'parking.jpg', text: 'Все возможные виды парковки'}, 
{img: 'parking.jpg', text: 'Все возможные виды парковки'}]

const Advantages = () => {
    const classes = useStyles()

    return <div id='advantages' className={classes.root}>
        <Typography className={classes.header}>Плюсы частных уроков вождения</Typography>
        <div className={classes.cardRow}>{CardRow.map((item) => (<ImageCard className={classes.box} img={item.img} textImg={item.text}/>))}</div>   
    </div>
}

export default Advantages