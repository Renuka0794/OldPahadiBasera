import React from "react";
import Grid from "@material-ui/core/Grid";
import Banner from "../../Components/Banner";
import OverlayBox from "../../Components/OverlayBox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  overlayHeading: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: "left",
    fontSize: 50,
    fontWeight: 300,
    letterSpacing: 2,
  },
  overlaySubheading: {
    textAlign: "left",
    fontSize: 20,
    letterSpacing: 2,
  },
  overlayButton: {
    fontSize: 14,
    fontWeight: 300,
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner>
          <OverlayBox
            height={"auto"}
            width={"auto"}
            top={0}
            left={50}
            style={{ paddingRight: 50 }}
          >
            <div style={{ textAlign: "left" }}>
              <h2 className={classes.overlayHeading}>PAHADI</h2>
              <h2 className={classes.overlayHeading}>BASERA</h2>

              <p className={classes.overlaySubheading}>HIMACHALI HOMESTAY</p>
              <Button
                variant="contained"
                color="primary"
                className={classes.overlayButton}
              >
                Read More...
              </Button>
            </div>
          </OverlayBox>
        </Banner>
      </Grid>
    </Grid>
  );
}
