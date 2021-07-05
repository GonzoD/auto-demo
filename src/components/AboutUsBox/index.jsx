import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AboutUsCircleInfo from '../AboutUsCircleInfo';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    root: {
        background: '#1b2957CC',
        marginLeft: '50%',
        position: 'absolute',
    },
    rootBigScreen: {marginTop: '-5%',},
    rootMobile: {marginTop: '-20%',}
}));

const AboutUsBox = () => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div className={`${classes.root} ${isTabletOrMobile ? classes.rootMobile : classes.rootBigScreen}`}>
        <AboutUsCircleInfo amount='10 лет' info='опыта автоинсруктора'/>
    </div>
}

export default AboutUsBox