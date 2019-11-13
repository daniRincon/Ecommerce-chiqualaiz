


import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(24, 18)
  },
  container:{
      display: "flex",
      justifyContent: "center",
      marginTop: "7%"
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function OrderPlaced(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
      <div className={classes.container}>
         <Paper className={classes.root}>
      <Typography variant="h3" component="h3"  >
         {`Gracias por tu compra, ${props.name}!`}  <span><CheckCircleSharpIcon style={{ fontSize: "60px", marginBottom: "16px" , color: "#28a745"}} /></span>
      </Typography>

      <Typography component="p">
      Recibirás un correo electrónico con los detalles del pedido. 
      </Typography>
       <Divider/>
       <Button variant="contained" className={classes.button} onClick={props.handleClickHome}>
        Seguir explorando
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickOpen}>
        Cancelar el pedido
      </Button>
    </Paper>
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Deseas cancelar tu pedido?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escribe un correo a hola@chiqualaiz.com para que nuestro equipo de atención al cliente pueda asistirte.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Aceptar
          </Button>
       
        </DialogActions>
      </Dialog>
      </div>
    
  );
}
