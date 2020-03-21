import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Slider from "react-slick"
import classNames from 'classnames'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
const styles = theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
  },
  paperBeige: {
    backgroundColor: '#ede7cc',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1,1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1,1),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1,1)
    }
  },
  paperDark: {
    background: "rgba(0, 0, 0, 0.8)",
    margin: theme.spacing(2, 2),
    padding: theme.spacing(6, 2),
  },
  paperDark2: {
    backgroundColor: '#dfd2ae',
    backgroundImage: "url(../static/gallery/restaurant/r1.jpg)",
    backgroundPosition: "center center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  gridColorDark2: {
    backgroundColor: '#dfd2ae',
    padding: theme.spacing(3, 0),
  },
  img: {
    width: '100%'
  },
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    const { classes } = this.props;
    const settings = { centerMode: true };
    return (
      <Layout extendedHeader={false}>
        <br />
        <br />
        <br />
        <Grid container spacing={4} className={classes.gridColorDark2}>
          <Grid item xs={12}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="p" variant="h6" gutterBottom color='primary'>
                Restaurante & Pizzeria
              </Typography>
              <Typography component="p" variant="body2" color="primary">
                MAYABELL es un hotel y spa ubicado en Palenque, Chiapas. Ideal para consentirte en la alberca o jacuzzis, un agradable descanso en cualquiera de nuestras habitaciones de lujo, un masaje o buena comida en su restaurante exclusivo de comida internacional.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.gridColorDark2}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={2}>
              <Typography component="p" variant="h6" gutterBottom color='primary'>
                Restaurante & Pizzeria
              </Typography>
              <Typography component="p" variant="body2">
                Distruta de la gastronomía de la región preparada con ingredientes naturales. contamos con alternativas vegetarianas y un exquisito café.
                <br /><br />
              </Typography>
              <img src='./static/gallery/restaurant/r2.jpg' className={classes.img} alt="logo" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={2}>
              <Typography component="p" variant="h6" gutterBottom color='primary'>
                Bar
              </Typography>
              <Typography component="p" variant="body2">
                Tomar el sol, convivir con los seres queridos y disfrutar de un buen atardecer es de los grandes placeres de la estancia.
                <br /><br />
              </Typography>
              <img src='./static/gallery/restaurant/e.jpg' className={classes.img} alt="logo" />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)