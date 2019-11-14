import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { filteredGenres } from "../store/actions/books";

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

export default props => {
  const classes = useStyles();

  React.useEffect(() => {
    // props.fetchGenre();
  }, []);

  const [orderOption, setOrderOption] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          style={{ color: "white" }}
          id="demo-controlled-open-select-label"
        >
          Ordenar
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={orderOption.length > 0 ? orderOption : ""}
          onChange={e => {
            console.log(e.target.value);
            setOrderOption(e.target.value);
            //filtered.length ? sortBooks(filtered) : sortBooks(books);
            /*  setCategories('')
              props.filteredGenres(0)
            }
            else{ 
              
              props.filteredGenres(e.target.value.toString()) }
           */
          }}
          input={<Input />}
          MenuProps={MenuProps}
        >
          <MenuItem value="titulo">Título</MenuItem>
          <MenuItem value="precio">Precio</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
