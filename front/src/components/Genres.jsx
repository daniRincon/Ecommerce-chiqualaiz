// import React, { useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import { useSpring, animated } from "react-spring/web.cjs";
// import { Link } from "react-router-dom";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import Checkbox from "@material-ui/core/Checkbox";
// import Radio from "@material-ui/core/Radio";

// const useStyles = makeStyles(theme => ({
//   modal: {
//     display: "flex",
//     flexDirection: "row",
//     alignContent: "center",
//     justifyContent: "space-between",
//     textAlign: "left",
//     flexWrap: "wrap"
//     //backgroundColor:"red",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: "0%",
//     display: "flex",
//     //backgroundColor:"blue",
//     marginTop: "25%"
//   },
//   formControl: {
//     margin: theme.spacing(3),
//     //backgroundColor:"green",
//     justifyContent: "space-around"
//   }
// }));

// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     }
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// export default props => {

//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const categories = [];

//   React.useEffect(()=> {
//     props.fetchGenre();
//   }, [])

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (books, categories) => {
//     setOpen(false);
//     props.filteredGenres(books, categories);
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-link btn btn-light"
//         onClick={handleOpen}
//       >
//         Categorias
//       </button>
//       <Modal
//         aria-labelledby="spring-modal-title"
//         aria-describedby="spring-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500
//         }}
//       >
//         <Fade
//           in={open}
//           style={{
//             height: "45%",
//             width: "45%"
//           }}
//         >
//           <div className={classes.paper}>
//             <ul>
//               {props.genres.map((genre, i) => {
//                 return (
//                   <li key={i}>
//                     <input
//                       onClick={() => {
//                         categories.push(genre.id);
//                       }}
//                       type="checkbox"
//                       value={genre.nombre}
//                     />
//                     {genre.nombre}
//                   </li>
//                 );
//               })}
//               <button
//                 type="button"
//                 className="btn btn-link btn btn-light"
//                 onClick={()=> handleClose(props.genres, categories)}>
//                 Filtrar
//               </button>
//             </ul>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// };

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default props => {
  const classes = useStyles();
  const theme = useTheme();

  React.useEffect(() => {
    props.fetchGenre();
  }, []);

  const [categories, setCategories] = React.useState([]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel style={{ color: "white" }} id="demo-mutiple-name-label">
          Categorias
        </InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={categories}
          onChange={e => {
            setCategories(e.target.value);
            props.filteredGenres(props.genres, e.target.value);
          }}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {props.genres.map((genre, i) => (
            <MenuItem key={i} value={genre.id}>
              {genre.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

// <FormControl className={clsx(classes.formControl, classes.noLabel)}>
// <Select
//   multiple
//   displayEmpty
//   value={categories}
//   onChange={(e)=> {
//     setCategories(e.target.value);
//      props.filteredGenres(props.genres, e.target.value);
//      console.log(e)
//     }}
//   input={<Input />}
//   renderValue={selected => {
//     if (selected.length === 0) {
//       return <em>Categorias</em>;
//     }

//     return selected.join(', ');
//   }}
//   MenuProps={MenuProps}
// >
//   <MenuItem disabled value="">
//     <em>Categorias</em>
//   </MenuItem>
//   {props.genres.map((genre, i) => (
//     <MenuItem key={i} value={genre.id}>
//       {genre.nombre}
//     </MenuItem>
//   ))}
// </Select>
// </FormControl>
