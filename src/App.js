import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" >
              Myself
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container style={{ marginTop: "64px", height: "calc(100vh - 64px)" }}>
          <Grid item xs style={{ backgroundColor: "blue" }}>
            haut gauche
          </Grid>
          <Grid item xs style={{ backgroundColor: "red" }}>
            haut droit
          </Grid>
        </Grid>
        <Grid container style={{ height: "calc(100vh - 64px)" }}>
          <Grid item xs style={{ backgroundColor: "red" }}>
            bas gauche
          </Grid>
          <Grid item xs style={{ backgroundColor: "blue" }}>
            bas droite
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
