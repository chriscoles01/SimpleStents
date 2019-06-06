import React, { Component, Fragment } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Routes from "./Routes";
class App extends Component {
  render() {
    return (
      <Fragment>
      
    {/* This creates the navigation bar along the top of the page */}

    <AppBar  position="fixed">
    <Toolbar>
              <Button  href="/" color="inherit">Home</Button>
              <Button color="inherit" href="/kidney">Kidney</Button>
              <Button color="inherit" href="/bladder">Urinary System</Button>
    </Toolbar>
    </AppBar>
    {/* Routes component made, this will render the appropriate page given the url (href) */}
    <Routes/>
        </Fragment>

    );
  }
} 

export default App;
