import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './App.css';
import Button from '@material-ui/core/Button';
import { Element, scroller } from 'react-scroll';
import LinearProgress from '@material-ui/core/LinearProgress';
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class App extends Component {
  @observable currentHeight = 0;
  rowsContent = ["Experience", "Education", "Projects", "Skills", "Awards"];

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const midPoint = document.documentElement.scrollTop + window.outerHeight / 2;
      const percentage = midPoint / document.documentElement.scrollHeight;
      this.currentHeight = Math.floor(percentage * (this.rowsContent.length + 1)) / this.rowsContent.length * 100;
    });
  }

  scrollTo(val) {
    console.log(val);
    scroller.scrollTo(val, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -69,
    })
  }

  render() {
    const rows = this.rowsContent.map((value, index) =>
      <Element key={value} name={value} >
        <Grid container className={styles.rowContent}>
          <Grid item xs style={{ backgroundColor: index % 2 === 0 ? "#303030" : "#F0F0F0" }}>
            {value}
          </Grid>
          <Grid item xs style={{ backgroundColor: index % 2 === 0 ? "#F0F0F0" : "#303030" }}>
            {value}
          </Grid>
        </Grid>
      </Element>
    );
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" className={styles.mainButton}>
              Myself
            </Typography>
            {this.rowsContent.map((value) =>
              <Button key={value} to={{ value }} onClick={() => this.scrollTo(value)}>{value}</Button>
            )}
          </Toolbar>
          <LinearProgress color="secondary" variant="determinate" value={this.currentHeight} />
        </AppBar>
        <div className={styles.appLayout}>
          {rows}
        </div>
      </div>
    );
  }
}

export default App;
