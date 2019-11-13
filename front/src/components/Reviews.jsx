import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
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

export default function Reviews(props) {
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
          Reseñas{" "}
        </Typography>
      </ListItem>
      { props.user && props.compras.includes(props.prodId)
      ? <form onSubmit={(e) => props.handleSubmit(e)}>
          <strong>Dejar review:</strong>
          <div className="form-group">
            <label>Alias:</label>
            <input type='text' name='alias'></input>
          </div>
          <div className="form-group">
            <label>Titulo:</label>
            <input type='text' name='titulo'></input>
          </div>
          <div className="form-group">
            <label>Content:</label>
            <input type='text' name='content'></input>
          </div>
          <button className="btn btn-info" type="submit">Submit</button>
      </form> : <h5>Compra el producto para dejar una review!</h5>}

      {props.reviews && props.reviews.map((review, index) => {
        return <ListItem key={index} alignItems="flex-start">
        <ListItemText
          primary={<React.Fragment> {review.title} <Rating name="size-small" value={review.estrellas} size="small" readOnly />
          </React.Fragment> }
          
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {review.autor}
              </Typography>
              {review.content}
            </React.Fragment>
          }
        />
      </ListItem>
      })}
      <Divider />

    </List>
  );
}



