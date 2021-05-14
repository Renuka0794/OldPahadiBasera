import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: (props) => props.height,
    width: (props) => props.width,
    top: (props) => props.top,
    left: (props) => props.left,
    position: "absolute",
    backgroundColor: "#f9f7f794",
    padding: 10,
  },
});

export default function OverlayBox(props) {
  const classes = useStyles({
    height: props.height,
    width: props.width,
    top: props.top,
    left: props.left,
  });
  return (
    <Box
      component="span"
      m={1}
      className={classes.root}
      style={{ ...props.style }}
    >
      {props.children}
    </Box>
  );
}
