import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

import RateReviewIcon from "@material-ui/icons/RateReview";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    
    alignSelf: "center",
    width: 1000,
    paddingLeft: "80px",
    paddingRight: "80px",
    paddingTop: "15px",
    paddingBottom: "150px",
    backgroundColor: theme.palette.background.paper
   
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  total: {
    alignContent: "flex-end",
    paddingLeft: 75,
    paddingBotton: "100px"

  },
  container:{
    display: "flex",
    justifyContent: "center",

  }
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function Pedido({pedidoSelected, handleClick, total}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <div className={classes.root} >

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" className={classes.title}>
            {`Pedido # ${pedidoSelected.pedido.id}`}
          </Typography>
          <Typography variant="h6" className={classes.title}>
           {` Status: ${pedidoSelected.pedido.orderStatus} Fecha: ${pedidoSelected.pedido.orderDate.split("T")[0]}`}
          </Typography>
          <div className={classes.demo}>
            <List>{pedidoSelected.items.map((item)=>{
              return (
              
                <ListItem button onClick={()=>{ handleClick(item.book.id)}} key={item.book.id}>
                  <ListItemAvatar>
                    <Avatar  src={item.book.url}>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.book.titulo} secondary={`cantidad: ${item.cantidad} `}/>
                  <ListItemText primary={`Precio: $ ${item.book.precio} `}/>
                  <ListItemSecondaryAction>
                    <Tooltip title="Deja una resena">
                      <IconButton edge="end" aria-label="delete"onClick={()=>{ handleClick(item.book.id)}}>
                        <RateReviewIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
               
              )
            })}
             
              <ListItem className={classes.total}>
             

                <ListItemText primary= {`Total: $${total.toFixed(2)}`} />
            
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
