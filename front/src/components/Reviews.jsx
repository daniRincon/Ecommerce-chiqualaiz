import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  root: {
    width: "230%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  font: {
    fontSize: "180%"
  }
}));

export default function Reviews() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <Typography
          component="h1"
          variant="body2"
          className={classes.font}
          color="textPrimary"
        >
          Reviews{" "}
        </Typography>

      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<React.Fragment> El peor libro que he leido <Rating name="size-small" value={1} size="small" readOnly />
          </React.Fragment> }
          
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Donald27
              </Typography>
              {"la protagonista es patetica"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<React.Fragment> Me ha cambiado la vida <Rating name="size-small" value={5} size="small" readOnly />
          </React.Fragment> }
          
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                AliCo8
              </Typography>
              {"..."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}



