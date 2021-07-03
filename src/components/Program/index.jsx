import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '30px'
    },
    header: {
        fontSize: '20px'
    },
    lineRow: {
        display: 'flex',
    },
    box: {
        margin: '20px 20px'
    },
}));

const TopLineRow = [{img: 'parking.jpg', text: 'Все возможные виды парковки'}, 
{img: 'parking.jpg', text: 'Все возможные виды парковки'}, 
{img: 'parking.jpg', text: 'Все возможные виды парковки'}]
const BottomLineRow = [{img: 'parking.jpg', text: 'Все возможные виды парковки'}, 
{img: 'parking.jpg', text: 'Все возможные виды парковки'}, 
{img: 'parking.jpg', text: 'Все возможные виды парковки'}]

const Program = () => {
    const classes = useStyles()

    return <div id='program' className={classes.root}>
        <Typography className={classes.header}>Программа обучения</Typography>
        <div className={classes.lineRow}>{TopLineRow.map((item) => (<ImageCard className={classes.box} img={item.img} textImg={item.text}/>))}</div>
        <div className={classes.lineRow}>{BottomLineRow.map((item) => (<ImageCard className={classes.box}  img={item.img} textImg={item.text}/>))}</div>    
    </div>
}

export default Program