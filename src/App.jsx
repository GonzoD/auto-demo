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
      backgroundImage: 'url(background.jpg)',
      backgroundRepeat: 'repeat',
  },
  introBack: {
    padding: '40px 150px 0 150px',
    backgroundImage: 'url(backcar.jpeg)',
    opacity: 0.85,
  },
  intro: {
    marginBottom: '60px',
  },
  content: {
    margin: '0 150px',
  }
}));

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar />
      <div className={classes.introBack}>
      <Introduction className={classes.intro}/>
      <BestFeatures />
      </div>
      <div className={classes.content}>
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
