import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import InfiniteScroll from "react-infinite-scroller";
import Box from "@material-ui/core/Box";

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
  console.log(props)
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [alias, setAlias] = React.useState("");
  const [content, setContent] = React.useState("");

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
          <div>
              <strong>Dejar review:</strong>
            <form onSubmit={e => props.handleSubmit(e, value, content, alias, props.prodId)}>
                <label>Alias:</label>
              <div className="form-group">
                <input
                  type="text"
                  value={alias}
                  onChange={e => {
                    setAlias(e.target.value);
                  }}
                  name="alias"
                ></input>
              </div>
              {/* <div className="form-group">
                <label>Titulo:</label>
                <input type="text" name="titulo"></input>
              </div> */}
                <label>Content:</label>
              <div className="form-group">
                <textarea
                  type="text"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  name="content"
                 />
              </div>
              <div>
                <div>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Calificacion:</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                  <button className="btn btn-info" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
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
                  {" "}
                  {review.title}{" "}
                  <Rating
                    name="size-small"
                    value={review.estrellas}
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
                    style={{ marginRight: 10 }}
                  >
                    {review.autor}
                  </Typography>
                  {props.truncarReview(
                    review.content,
                    200
                  )}
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


