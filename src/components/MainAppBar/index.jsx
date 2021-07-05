import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Button } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  icon: {backgroundColor: '#30D171'},
  iconMobie: {height: '20px', width: '20px'},
  fab: {
    background: '#30D171',
    '&:hover': {
      backgroundColor: '#30D171'
    }
},
  fabMobile: {width: '33px', height: '31px'},
  appBar: {
    color: 'black',
    backgroundColor: 'transparent',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
  },
  menu: {
    color: '#FF7618',
    fontWeight: 600,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
  },
  menuBigScreen: {fontSize: '20px'},
  menuMobile: {fontSize: '10px'},
}));

const handleClick = (event) => {
  const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};


const handleAppBar = (id) => (document.getElementById(`${id}`).scrollIntoView({
  behavior: 'smooth'
}))

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const MainAppBar = (props) => {
  const classes = useStyles()
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Button className={`${classes.menu} ${isTabletOrMobile?classes.menuMobile:classes.menuBigScreen}`} onClick={() => handleAppBar('features')}>Особенности</Button>
          <Button className={`${classes.menu} ${isTabletOrMobile?classes.menuMobile:classes.menuBigScreen}`} onClick={() => handleAppBar('about')}>О себе</Button>
          <Button className={`${classes.menu} ${isTabletOrMobile?classes.menuMobile:classes.menuBigScreen}`} onClick={() => handleAppBar('program')}>Программа</Button>
          <Button className={`${classes.menu} ${isTabletOrMobile?classes.menuMobile:classes.menuBigScreen}`} onClick={() => handleAppBar('advantages')}>Плюсы</Button>
          <Button className={`${classes.menu} ${isTabletOrMobile?classes.menuMobile:classes.menuBigScreen}`} onClick={() => handleAppBar('contacts')}>Контакты</Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab className={`${classes.fab} ${isTabletOrMobile && classes.fabMobile}`} color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon className={`${classes.icon} ${isTabletOrMobile && classes.iconMobie}`}/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default MainAppBar