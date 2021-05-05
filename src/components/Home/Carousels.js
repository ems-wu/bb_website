import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const useStyles = makeStyles((theme) => ({
  image: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "100%", 
    width: "100%",
  },
  root: {
    paddingLeft: '10%',
    paddingRight: '10%',
  }
  
}));

export default function Carousels() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <Carousel breakPoints={breakPoints}>
        <img src="./images/Screenshot (478).png" className={classes.image}/>
        <img src="./images/Screenshot (479).png" className={classes.image}/>
        <img src="./images/Screenshot (480).png" className={classes.image}/>
        <img src="./images/Screenshot (478).png" className={classes.image}/>
        <img src="./images/Screenshot (479).png" className={classes.image}/>
        <img src="./images/Screenshot (480).png" className={classes.image}/>
      </Carousel>
    </div>
  );
}