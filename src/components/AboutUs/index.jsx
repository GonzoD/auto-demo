import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AboutUsInfo from '../AboutUsInfo';
import AboutUsBox from '../AboutUsBox';

const useStyles = makeStyles(() => ({
    root: {
        height: '600px',
        backgroundImage: 'url(carsandsea.jpg)',
        backgroundSize: 'cover',
    }
}));

const AboutUs = () => {
    const classes = useStyles()

    return <div id='about' className={classes.root}>
        <AboutUsInfo />
        <AboutUsBox />    
    </div>
}

export default AboutUs