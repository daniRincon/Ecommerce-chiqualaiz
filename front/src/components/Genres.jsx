import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import { Link } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    textAlign: "left",
    flexWrap: "wrap"
    //backgroundColor:"red",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "0%",
    display: "flex",
    //backgroundColor:"blue",
    marginTop: "25%"
  },
  formControl: {
    margin: theme.spacing(3),
    //backgroundColor:"green",
    justifyContent: "space-around"
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default props => {
  console.log(props);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    props.fetchGenre();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-link btn btn-light"
        onClick={handleOpen}
      >
        Categorias
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade
          in={open}
          style={{
            height: "45%",
            width: "45%"
          }}
        >
          <div className={classes.paper}>
            <ul>
              {props.genres.map(genre => {
                return (
                  <li>
                    <input
                      key={genre.id}
                      onClick={()=> {
                        
                      }}
                      type="checkbox"
                      checked={props.isChecked}
                      value={props.value}
                    />
                    {props.value}
                  </li>
                );
              })}
              <button
                type="button"
                className="btn btn-link btn btn-light"
                onClick={handleClose}
              >
                Filtrar
              </button>
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
