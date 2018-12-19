import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { URLs } from '../URLs';
import { observer } from "mobx-react";
import { observable } from "mobx";
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import styles from "./CustomCard.css";

@observer
class CustomCard extends Component {
  @observable expanded = false;

  handleExpandClick = () => {
    this.expanded = !this.expanded;
  };

  render() {
    const width = this.props.width ? this.props.width : window.innerWidth / 3.5;
    console.log(width);
    return (
      <Card style={{ width, margin: 20 }}>
        <CardHeader
          avatar={<img alt="Microsoft" style={{ width: 40, height: 40 }} src={URLs.microsoftLogo} />}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          style={{ paddingTop: "56.25%" }}
          image="https://c.s-microsoft.com/en-us/CMSImages/Microsoft-logo_rgb_wht.jpg?version=256EB2C3-1E17-2967-746F-3F32234EF429"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <IconButton
            className={classnames(styles.expand, {
              [styles.expandOpen]: this.expanded,
            })}
            onClick={this.handleExpandClick}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default CustomCard;

