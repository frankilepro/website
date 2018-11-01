import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './App.css';

class App extends Component {
  render() {
    const numberOfRows = Array.from(Array(10).keys());
    const rows = numberOfRows.map((index) =>
      <Grid container className={styles.rowContent}>
        <Grid item xs style={{ backgroundColor: index % 2 === 0 ? "#303030" : "#F0F0F0" }}>
          haut gauche
        </Grid>
        <Grid item xs style={{ backgroundColor: index % 2 === 0 ? "#F0F0F0" : "#303030" }}>
          haut droit
        </Grid>
      </Grid>
    );
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" >
              Myself
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.appLayout}>
          {rows}
        </div>
      </div>
    );
  }
}

export default App;
