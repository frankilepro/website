import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
    const width = this.props.width ? this.props.width : window.innerWidth / 3.2;
    return (
      <Card style={{ width, margin: 10 }}>
        <CardHeader
          avatar={this.props.avatar && <img alt="Microsoft" style={{ width: 40, height: 40 }} src={this.props.avatar} />}
          title={this.props.header}
          subheader={this.props.subheader}
        />
        {this.props.cardBody}
        <CardContent>
          <Typography component="p">
            {this.props.bodySummary}
          </Typography>
        </CardContent>
        {this.props.bodyExtended &&
          <>
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
                  {this.props.bodyExtended}
                </Typography>
              </CardContent>
            </Collapse>
          </>
        }
      </Card>
    );
  }
}

export default CustomCard;

