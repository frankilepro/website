import React, { Component } from 'react';
import CustomCard from './CustomCard';
import Grid from '@material-ui/core/Grid';

class Experience extends Component {
  render() {
    return (
      <Grid container justify="center">
        <CustomCard width={window.innerWidth / 2}/>
        <CustomCard/>
        <CustomCard width={window.innerWidth}/>
      </Grid>
    );
  }
}

export default Experience;
