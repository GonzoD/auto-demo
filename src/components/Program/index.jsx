import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '30px'
    },
    header: {
        fontSize: '20px',
        color: 'white',
        fontWeight: 600,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
    },
    lineRow: {
        display: 'flex',
    },
    lineColumn: {
        flexDirection: 'column'
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
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div id='program' className={classes.root}>
        <Typography className={classes.header}>Программа обучения</Typography>
        <div className={`${classes.lineRow} ${isTabletOrMobile && classes.lineColumn}`}>{TopLineRow.map((item) => (<ImageCard className={classes.box} img={item.img} textImg={item.text}/>))}</div>
        <div className={`${classes.lineRow} ${isTabletOrMobile && classes.lineColumn}`}>{BottomLineRow.map((item) => (<ImageCard className={classes.box}  img={item.img} textImg={item.text}/>))}</div>    
    </div>
}

export default Program