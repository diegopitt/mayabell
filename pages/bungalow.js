import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Slider from "react-slick"
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
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
  img: {
    width: '100%'
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
    padding: theme.spacing(4, 2),
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
  button: {
    color: '#ffffff',
    width: '100%',
    marginTop: 16
  }
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
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h2" variant="h6" gutterBottom color='primary'>
                Bungalow Familiar
              </Typography>
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img1)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img2)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img3)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img4)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img5)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img6)} />
                </div>
              </Slider>
              <Slider asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true}{...settings}>
                <div className={classes.thumbwrapper}>
                  <div className={classNames(classes.image, classes.img1)} />
                </div>
                <div className={classes.thumbwrapper}>
                  <div className={classNames(classes.image, classes.img2)} />
                </div>
                <div className={classes.thumbwrapper}>
                  <div className={classNames(classes.image, classes.img3)} />
                </div>
                <div className={classes.thumbwrapper}>
                  <div className={classNames(classes.image, classes.img4)} />
                </div>
                <div className={classes.thumbwrapper}>
                  <div className={classNames(classes.image, classes.img5)} />
                </div>
                <div className={classes.thumbwrapper}>
                  <div className={classNames(classes.image, classes.img6)} />
                </div>
              </Slider>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h2" variant="h6" gutterBottom color='primary'>
                Detalles
              </Typography>
              <Typography component="p" variant="subtitle1">
                Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                <br />
              </Typography>
              <Typography component="p" variant="subtitle1">
                Entire Home
              </Typography>
              <Typography component="p" variant="subtitle1">
                5 Beds
              </Typography>
              <Typography component="p" variant="subtitle1">
                2 bedrooms
              </Typography>
              <Typography component="p" variant="subtitle1">
                2 baths
              </Typography>
              <Typography component="p" variant="subtitle1">
                WIFI
              </Typography>
              <Button variant="contained" color="primary" className={classes.button}>
                Reserva Ahora
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={10} className={classes.gridColorDark}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="h2" variant="h6" gutterBottom color='primary'>
                HOTEL
              </Typography>
              <Typography component="p" variant="subtitle1" color="primary">
                MAYABELL es un hotel y spa ubicado en Palenque, Chiapas. Ideal para consentirte en la alberca o jacuzzis, un agradable descanso en cualquiera de nuestras habitaciones de lujo, un masaje o buena comida en su restaurante exclusivo de comida internacional.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
          </Grid>
        </Grid>
        <Grid container spacing={10} className={classes.gridColorBeige}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="h2" variant="h6" gutterBottom color='primary'>
                SPA
              </Typography>
              <Typography component="p" variant="subtitle1">
                Aquí la tranquilidad prevalece, ideal para que su estancia sea una experiencia rejuvenecedora. hidromasajes, faciales, corporales, terapias y Reiki son sólo algunos de los servicios que ofrecemos.
                <br /><br />
              </Typography>
              <img src='./static/gallery/11.jpg' className={classes.img} alt="logo" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="h2" variant="h6" gutterBottom color='primary'>
                Alberca
              </Typography>
              <Typography component="p" variant="subtitle1">
                Tomar el sol, convivir con los seres queridos y disfrutar de un buen atardecer es de los grandes placeres de la estancia.
                <br /><br /><br />
              </Typography>
              <img src='./static/gallery/5.jpg' className={classes.img} alt="logo" />
            </Paper>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)