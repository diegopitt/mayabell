import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Carousel from "react-slick"
import Layout from '../layout/Layout'
import Footer from '../layout/Footer'
import Tours from '../layout/Tours'
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Typography from '@material-ui/core/Typography'
import IosArrowDropright from "react-ionicons/lib/IosArrowForward";
import IosArrowDropleft from "react-ionicons/lib/IosArrowBack";
import IconButton from "@material-ui/core/IconButton";

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
  img1: { backgroundImage: 'url(../static/gallery/pool/p12.jpg)'},
  img2: { backgroundImage: 'url(../static/gallery/rooms/10.jpg)' },
  img3: { backgroundImage: 'url(../static/gallery/restaurant/r1.jpg)' },
  img4: { backgroundImage: 'url(../static/gallery/rooms/11.jpg)' },
  imgwrapper: {
    position: 'relative',
    height: '100vh',
  },
  img: {
    width:'100%'
  },
  captionwrapper:{
    position: 'absolute',
    letterSpacing: '0.1125em',
    [theme.breakpoints.up('xs')]: {
      bottom: '7%',
    },
    [theme.breakpoints.up('sm')]: {
      bottom: '0%',
    }
  },
  caption: { 
    [theme.breakpoints.up('xs')]: {
      fontSize: 17,
      padding: theme.spacing(1, 2),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 22,
      padding: theme.spacing(1, 4),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
      padding: theme.spacing(1, 6),
    },
    fontWeight: 400,
    color: '#ede7cc',
    margin: theme.spacing(2, 0),
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  captionDuo: {
    [theme.breakpoints.up('xs')]: {
      fontSize: 18,
      padding: theme.spacing(1, 2),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 22,
      padding: theme.spacing(1, 4),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
      padding: theme.spacing(1, 6),
    },
    fontWeight: 400,
    color: '#ede7cc',
    margin: theme.spacing(2, 0),
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  gridColor: {
    backgroundColor: '#ffffff'
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2, 2),
  },
  paperBeige: {
    backgroundColor: '#f4f2db',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 2),
    }
  },
  paperDark: {
    backgroundColor: '#190f1b',
    [theme.breakpoints.up('xs')]: {
      margin: theme.spacing(2, 2),
      padding: theme.spacing(2, 2),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(4, 2),
      padding: theme.spacing(4, 2),
    }
  },
  gridColorBeige: {
    backgroundColor: '#f4f2db',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(4, 1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 1),
    }
  },
  gridColorDark: {
    backgroundColor: '#23262d',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(4, 1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 1),
    }
  },
  lS:{},
  map: {
    width: '100%'
  },
  prev: {
    padding: "0px",
    margin: "0px",
    opacity: 0.8,
    position: "absolute",
    top: "40%",
    left: "5%",
    zIndex: 1
  },
  next: {
    padding: "0px",
    margin: "0px",
    opacity: 0.8,
    position: "absolute",
    top: "40%",
    right: "5%",
    zIndex: 1
  }
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <IconButton {...props} aria-label="prev" className={classes.prev}>
        <IosArrowDropleft fontSize="52px" color="#ffffff" />
      </IconButton>
    );
    const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <IconButton {...props} aria-label="next" className={classes.next}>
        <IosArrowDropright fontSize="52px" color="#ffffff" />
      </IconButton>
    );
    const settings = {
      arrows: true,
      infinite: true,
      autoplay: false,
      dots: false,
      draggable: false,
      fade: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />
    };
    const { classes } = this.props;
    return (
      <Layout extendedHeader={true}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.wrapper}>
              <Carousel {...settings}>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img1)} />
                  <div className={classes.captionwrapper}>
                    <div className={classes.caption}>BIENVENIDO A MAYABELL</div>
                  </div>
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img2)} />
                  <div className={classes.captionwrapper}>
                    <div className={classes.caption}>CONECTATE CON LA NATURALEZA Y FASCINANTE DE NUESTRO LUGAR</div>
                  </div>
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img3)} />
                  <div className={classes.captionwrapper}>
                    <div className={classes.captionDuo}>DISFRUTA DE NUESTRA COCINA INTERNACIONAL</div>
                    <div className={classes.captionDuo}>USAMOS INGREDIENTES Y RECETAS TRADICIONALES</div>
                  </div>
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img4)} />
                  <div className={classes.captionwrapper}>
                    <div className={classes.caption}>RELAJATE EN NUESTROS COMODOS HAMBIENTES</div>
                  </div>
                </div>
              </Carousel>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.gridColorDark}>
          <Grid item xs={12}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="p" variant="h5" gutterBottom color='primary'>
                HOTEL MAYABELL
              </Typography>
              <Typography component="p" variant="body2" color="primary" className={classes.lS}>
                MAYABELL es un Hotel y Spa ubicado en Palenque, Chiapas. Ideal para consentirte en la alberca, un agradable descanso en cualquiera de nuestras confortables habitaciones, un masaje y una buena comida en su restaurante de comida regional e internacional.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <Grid container spacing={0} className={classes.gridColorBeige}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="p" variant="h4" color='primary' gutterBottom>
                SPA
              </Typography>
              <Typography component="p" gutterBottom variant="body2" gutterBottom>
                Aquí la tranquilidad prevalece, ideal para que su estancia sea una experiencia rejuvenecedora. Hidromasajes, faciales, corporales, terapias y Reiki.
              </Typography>
              <img src='./static/gallery/spaindex.jpeg' className={classes.img} alt="" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="p" variant="h4" color='primary' gutterBottom>
                Alberca
              </Typography>
              <Typography component="p" variant="body2" gutterBottom>
                Tomar el sol, convivir con los seres queridos, disfrutar la naturaleza y un buen atardecer será de los grandes placeres de su estancia en Mayabell.
              </Typography>
              <img src='./static/gallery/pool/p8.jpg' className={classes.img} alt="" />
            </Paper>
          </Grid>
        </Grid>
        <Tours />
        <Footer />
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)