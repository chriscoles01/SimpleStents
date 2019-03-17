import React, { Component, Fragment } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Routes from "./Routes";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Fragment>
      
    
    <AppBar  position="fixed">
    <Toolbar>
              <Button  color="inherit">Home</Button>
              <Link color="inherit" to="/kidney">Kidney</Link>
              <Button color="inherit">Bladder</Button>
    </Toolbar>
    </AppBar>

    <Routes/>
        </Fragment>

    );
  }
} 

export default App;
