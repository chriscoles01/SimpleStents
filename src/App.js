import React, { Component, Fragment } from 'react';
import './App.css';
import Kidney from './Components/Kidney.js'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

class App extends Component {
  render() {
    return (
      <Fragment>
      
    
    <AppBar  position="fixed">
    <Toolbar>
              <Button  color="inherit">Home</Button>
              <Button color="inherit">Kidney</Button>
              <Button color="inherit">Bladder</Button>
    </Toolbar>
    </AppBar>

        <Kidney></Kidney>
        </Fragment>

    );
  }
} 

export default App;
