import React, { Component } from 'react';
import CustomCard from './CustomCard';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

class Experience extends Component {
  render() {
    return (
      <Grid container justify="center">
        <CustomCard
          header={<>Microsoft<br />Software Engineering Intern</>}
          subheader={<>Vancouver, Canada<br />May to August 2018</>}
          cardBody={
            <CardMedia
              style={{ paddingTop: "56.25%" }}
              image="https://c.s-microsoft.com/en-us/CMSImages/Microsoft-logo_rgb_wht.jpg?version=256EB2C3-1E17-2967-746F-3F32234EF429"
            />}
          bodySummary="Allo"
          bodyExtended="lol"
        />
        <CustomCard />
        <CustomCard />
      </Grid>
    );
  }
}

export default Experience;
