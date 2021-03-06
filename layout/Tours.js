import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const styles = theme => ({
  gridMapColor: {
    backgroundColor: '#23262d',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(5, 1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 1),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 1),
    }
  },
  paperRuins:{
    position: 'relative',
    backgroundImage: 'url(../static/gallery/ruins.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.up('xs')]: {
      margin: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 2),
    },
    padding: 0,
    minHeight:316,
    paddingTop:'10px',
    overflow:'hidden',
  },
  eRuins:{
    display:'inline',
    fontWeight:600,
    backgroundColor: "rgba(255,255,255,0.7)",
    padding:theme.spacing(1.5,5)
  },
  ruinsCaptions:{
    lineHeight: 1.4,
    margin: theme.spacing(1,2),
    fontWeight: 300,
    fontSize:13,
    color: '#dfd2ae',
    fontStyle: 'italic',
    paddingBottom:'24px',
  },
  paperWaterfall:{
    position: 'relative',
    backgroundImage: 'url(../static/gallery/aguaAzul.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.up('xs')]: {
      margin: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 2),
    },
    padding: 0,
    paddingTop:'10px',
    overflow:'hidden',
    minHeight:316
  },
  tourBtns:{
    position: 'absolute',
    backgroundColor: '#483119',
    color: '#f4f2db',
    bottom: '7%',
    right: '7%',
    "&:hover": {
      backgroundColor: '#756858',
    }
  },
});

class Tours extends Component {
  state = {};
  componentDidMount() {

  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0} className={classes.gridMapColor}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperRuins} elevation={4}>
            <Typography component="p" variant="subtitle1" color='secondary' className={classes.eRuins}>
            Explora Las Ruinas
            </Typography>
            <Link href="/tours">
              <Button variant="contained" className={classes.tourBtns}>Ver Tours</Button>
            </Link>
          </Paper>
          <Typography component="div" variant="body2" className={classes.ruinsCaptions}>
          Mayabell se encuentra a 300 metros de las ruinas, desde aquí se pueden visitar cascadas, hacer trekking y excursiones por la selva.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperWaterfall} elevation={4}>
            <Typography component="p" variant="subtitle1" color='secondary' className={classes.eRuins}>
              Explora Agua Azul
            </Typography>
            <Link href="/tours">
              <Button variant="contained" className={classes.tourBtns}>Ver Tours</Button>
            </Link>
          </Paper>
          <Typography component="div" variant="body2" className={classes.ruinsCaptions}>
          Agua Azul es una serie de cascadas que se encuentran en el río Xanil en el estado sureño a 68 kilómetros de Mayabell
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Tours);
