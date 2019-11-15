import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import InfiniteScroll from "react-infinite-scroller";

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
      {props.user && props.compras.includes(props.prodId) ? (
        props.reviewIds.reduce((bool, review) => {
          return bool ? true : props.userReviews.includes(review);
        }, false) ? (
          <strong>¡Muchas gracias por tu review!</strong>
        ) : (
          <form id="reviewForm" onSubmit={e => props.handleSubmit(e)}>
            <strong>Dejar review:</strong>
            <div className="form-group">
              <label>Alias:</label>
              <input type="text" name="alias"></input>
            </div>
            <div className="form-group">
              <label>Titulo:</label>
              <input type="text" name="titulo"></input>
            </div>
            <div className="form-group">
              <label>Content:</label>
              <textarea maxLength="200" rows="4" cols="50" form="reviewForm" name="content"></textarea>
            </div>
            <button className="btn btn-info" type="submit">
              Submit
            </button>
          </form>
        )
      ) : (
        <strong>Compra el producto para dejar una review!</strong>
      )}
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      > */}
      {props.reviews.map((review, index) => {
        return (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={
                <React.Fragment>
                  {review.title}{" "}
                  <Rating
                    name="half-rating"
                    value={review.estrellas / 2}
                    max={5}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    style={
                      {marginRight: 10}
                    }
                  >
                    {review.autor}
                  </Typography>
                  {props.truncarReview(review.content, 200)}
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
      {/* </InfiniteScroll> */}

      <Divider />
    </List>
  );
}
