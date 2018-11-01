import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  rowsContent = { Experience: null, Education: null, Projects: null, Skills: null, Awards: null };

  scrollToDomRef = (val) => {
    const myDomNode = ReactDOM.findDOMNode(this.rowsContent[val])
    window.scrollTo(0, myDomNode.offsetTop - 64)
  }

  render() {
    const rows = Object.keys(this.rowsContent).map((value, index) =>
      <Grid key={value} container className={styles.rowContent} ref={r => { this.rowsContent[value] = r }}>
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
            {Object.keys(this.rowsContent).map((value) =>
              <Button onClick={() => this.scrollToDomRef(value)}>{value}</Button>
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
