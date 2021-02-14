import React from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./Styles";

function App() {
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Snapshot
        </Typography>
      </AppBar>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
