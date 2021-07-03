import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AboutUsCircleInfo from '../AboutUsCircleInfo';

const useStyles = makeStyles(() => ({
    root: {
        background: '#1b2957CC',
        width: '400px',
        height: '150px',
        marginLeft: '45%',
        position: 'absolute',
        marginTop: '-5%',
    },
}));

const AboutUsBox = () => {
    const classes = useStyles()

    return <div className={classes.root}>
        <AboutUsCircleInfo amount='10 лет' info='опыта автоинсруктора'/>
    </div>
}

export default AboutUsBox