import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FeatureBlock from '../FeatureBlock';

const useStyles = makeStyles(() => ({
    root: {
        background: '#1b2957CC',
        paddingTop: '13px',
    },
    header: {
        marginBottom: '14px',
        textAlign: 'center',
    },
    featureBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}));

const BestFeatures = () => {
    const classes = useStyles()

    return <div id='features'className={classes.root}>  
    <Typography className={classes.header}>Лучшие особености</Typography>
    <div className={classes.featureBlock}>
        <FeatureBlock icon='pro'/>
        <FeatureBlock icon='car'/>
        <FeatureBlock icon='mood'/>
    </div>  
    </div>
}

export default BestFeatures