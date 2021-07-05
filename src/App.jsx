import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './components/MainAppBar'
import Introduction from './components/Introduction';
import Program from './components/Program';
import AboutUs from './components/AboutUs';
import BestFeatures from './components/BestFeatures';
import Advantages from './components/Advantages';
import ContactAd from './components/ContactAd';
import Contacts from './components/Contacts';

const useStyles = makeStyles(() => ({
  root: {
      background: '#1C2128',
      '& header.MuiAppBar-root': {
        width: '100%',
        jystifyContent: 'center'
      },
      '& header.MuiAppBar-positionFixed': {
        right: 'auto',
      },
      '& header.MuiPaper-elevation4': {
        boxShadow: 'unset'
      }
  },
  introBack: {
    padding: '2% 10% 0 10%',
    background: '#20262E',
    opacity: 0.85,
  },
  intro: {
    marginBottom: '2%',
  },
  content: {
    margin: '0 10%',
    background: '#20262E',
  }
}));

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar />
      <div className={classes.content}>
      <Introduction className={classes.intro}/>
      <BestFeatures />
        <AboutUs />
        <Program />
        <ContactAd />
        <Advantages />
      </div>
      <Contacts />
    </div>
  );
}

export default App;
