import React, { Component } from 'react';
import CustomCard from './CustomCard';
import Grid from '@material-ui/core/Grid';

class Education extends Component {
  render() {
    return (
      <Grid style={{backgroundColor: "gray"}} container justify="center">
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Grid>
    );
  }
}

export default Education;
