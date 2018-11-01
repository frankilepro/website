import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './App.css';
import Button from '@material-ui/core/Button';
import { Element, scroller } from 'react-scroll'

class App extends Component {
  rowsContent = [ "Experience", "Education", "Projects", "Skills", "Awards" ];

  scrollTo(val) {
    scroller.scrollTo(val, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -64,
    })
  }

  render() {
    const rows = this.rowsContent.map((value, index) =>
      <Element name={value} >
        <Grid key={value} container className={styles.rowContent}>
          <Grid item xs style={{ backgroundColor: index % 2 === 0 ? "#303030" : "#F0F0F0" }}>
            haut gauche
        </Grid>
          <Grid item xs style={{ backgroundColor: index % 2 === 0 ? "#F0F0F0" : "#303030" }}>
            haut droit
        </Grid>
        </Grid>
      </Element>
    );
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" >
              Myself
            </Typography>
            {this.rowsContent.map((value) =>
              <Button to={{ value }} onClick={() => this.scrollTo(value)}>{value}</Button>
            )}
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
