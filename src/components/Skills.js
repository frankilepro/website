import React, { Component } from 'react';
import CustomCard from './CustomCard';
import Grid from '@material-ui/core/Grid';

class Skills extends Component {
  render() {
    return (
      <Grid container justify="center">
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Grid>
    );
  }
}

export default Skills;
