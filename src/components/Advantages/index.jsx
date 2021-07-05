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
        paddingTop: '20px'
    },
    header: {
        fontSize: '20px',
        color: 'white'
    },
    cardRow: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardColumn: {
        flexDirection: 'column'
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
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div id='advantages' className={classes.root}>
        <Typography className={classes.header}>Плюсы частных уроков вождения</Typography>
        <div className={`${classes.cardRow} ${isTabletOrMobile && classes.cardColumn}`}>{CardRow.map((item) => (<ImageCard className={classes.box} img={item.img} textImg={item.text}/>))}</div>   
    </div>
}

export default Advantages