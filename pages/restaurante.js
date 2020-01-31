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
    background: '#23262d',
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  img1: { backgroundImage: 'url(./static/gallery/11.jpg)' },
  img2: { backgroundImage: 'url(./static/gallery/10.jpg)' },
  img3: { backgroundImage: 'url(./static/gallery/9.jpg)' },
  img4: { backgroundImage: 'url(./static/gallery/8.jpg)' },
  img5: { backgroundImage: 'url(./static/gallery/7.jpg)' },
  img6: { backgroundImage: 'url(./static/gallery/61.jpg)' },
  imgwrapper: {
    position: 'relative',
    height: '340px',
  },
  thumbwrapper: {
    position: 'relative',
    height: '60px',
  },
  gridColor: {
    backgroundColor: '#ffffff'
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(6, 2),
    backgroundColor: 'transparent',

  },
  paperBeige: {
    backgroundColor: '#f4f2db',
    margin: theme.spacing(2),
    padding: theme.spacing(8, 2),
  },
  paperDark: {
    backgroundColor: '#190f1b',
    margin: theme.spacing(6, 2),
    padding: theme.spacing(6, 2),
  },
  gridColorBeige: {
    backgroundColor: '#f4f2db'
  },
  gridColorDark: {
    backgroundColor: '#23262d'
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
        <Grid container spacing={10} className={classes.gridColorBeige}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="h2" variant="h5" gutterBottom color='primary'>
                Restaurante
              </Typography>
              <Typography component="p" variant="subtitle1">
                Distruta de la gastronomía de la región preparada con ingredientes naturales. contamos con alternativas vegetarianas y un exquisito café.
                <br /><br />
              </Typography>
              <img src='./static/gallery/9.jpg' className={classes.img} alt="logo" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="h2" variant="h5" gutterBottom color='primary'>
                Bar
              </Typography>
              <Typography component="p" variant="subtitle1">
                Tomar el sol, convivir con los seres queridos y disfrutar de un buen atardecer es de los grandes placeres de la estancia.
                <br /><br />
              </Typography>
              <img src='./static/gallery/15.jpg' className={classes.img} alt="logo" />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={10} className={classes.gridColorDark}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="h2" variant="h5" gutterBottom color='primary'>
                HOTEL
              </Typography>
              <Typography component="p" variant="subtitle1" color="primary">
                MAYABELL es un hotel y spa ubicado en Palenque, Chiapas. Ideal para consentirte en la alberca o jacuzzis, un agradable descanso en cualquiera de nuestras habitaciones de lujo, un masaje o buena comida en su restaurante exclusivo de comida internacional.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <br />
        <br />
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)