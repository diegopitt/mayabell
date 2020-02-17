import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../layout/Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: "#f4f2db",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 640,
  },
  gridColorDark: {
    paddingTop: '68px',
    backgroundColor: "#190f1b",
  },
  gridColorBeige: {
    backgroundColor: "#f4f2db",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(1, 1)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 1)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 1)
    }
  },
  paperDark: {
    background: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(4, 2)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(4, 2)
    }
  },
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const { classes } = this.props;
    return (
      <Layout extendedHeader={false}>
        <Grid container spacing={0} className={classes.gridColorDark}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="p" variant="h6" color="primary">
                MAYABELL TOURS
              </Typography>
              <Typography component="p" variant="subtitle1" color="primary">
                Let us know when you will be arriving and what kind of room
                you would like to book. Make a reservation request now, pay
                when you arrive.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.gridColorBeige}>
          <Grid item xs={12} md={6}>
            <Card className={classes.root} elevation={0}>
            <CardMedia className={classes.cover} image="../static/gallery/ruins1080.jpg" title="Explora las Ruinas" />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="p" variant="h6" color='secondary'>
                  Explora Las Ruinas
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  Mayabell is located 300 meters from the ruins, from here you can visit waterfalls, trekking, and tours to the jungle.
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
          <Card className={classes.root} elevation={0}>
            <CardMedia className={classes.cover} image="../static/gallery/aguaAzul.jpg" title="Explora las Ruinas" />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="p" variant="h6" color='secondary'>
                  Explora Agua Azul
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  Agua Azul are a series of waterfalls found on the Xanil River in the southern state 68 kilometres from Mayabell
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.gridColorBeige}>
          <Grid item xs={12} md={6}>
            <Card className={classes.root} elevation={0}>
            <CardMedia className={classes.cover} image="../static/gallery/misolha.jpg" title="Explora las Ruinas" />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="p" variant="h6" color='secondary'>
                  Explora Misol Há
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  Misol-Há is a waterfall located in the Municipality of Salto de Agua, 25 kilometers from Mayabell
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Layout>
    );
  }
}
export default withStyles(styles)(Index);
