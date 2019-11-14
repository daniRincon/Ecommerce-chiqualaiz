import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

import RateReviewIcon from "@material-ui/icons/RateReview";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 1700,
    paddingLeft: "80px",
    paddingTop: "15px"
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  total: {
    paddingLeft: 75
  }
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function Pedido() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className={classes.title}>
            Pedido # 345
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Status: Despachado Fecha: 12/12/12
          </Typography>
          <div className={classes.demo}>
            <List>
              {generate(
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Titulo" secondary="cantidad:" />
                  <ListItemText primary="Precio: " />
                  <ListItemSecondaryAction>
                    <Tooltip title="Deja una resena">
                      <IconButton edge="end" aria-label="delete">
                        <RateReviewIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              <ListItem className={classes.total}>
                <ListItemText primary="Total" />
                <ListItemText primary="$$$$" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
