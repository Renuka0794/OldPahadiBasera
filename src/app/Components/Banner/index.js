import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../Images/banner1.jpg";

const useStyles = makeStyles(() => ({
  banner: {
    position: "relative",
    height: "80vh",
    background: "#ccc",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
  },
}));
export default function Banner(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.banner}>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  );
}
