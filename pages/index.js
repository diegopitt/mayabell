import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Carousel from "react-slick"
import Layout from '../layout/Layout'
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import GoogleMapReact from 'google-map-react'
import Typography from '@material-ui/core/Typography'

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  draggable: false,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
};
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
  img4: { backgroundImage: 'url(../static/gallery/4.jpg)' },
  img5: { backgroundImage: 'url(../static/gallery/51.jpg)' },
  img6: { backgroundImage: 'url(../static/gallery/61.jpg)' },
  img7: { backgroundImage: 'url(../static/gallery/7.jpg)' },
  img8: { backgroundImage: 'url(../static/gallery/8.jpg)' },
  img9: { backgroundImage: 'url(../static/gallery/9.jpg)' },
  img10: { backgroundImage: 'url(../static/gallery/10.jpg)' },
  img11: { backgroundImage: 'url(../static/gallery/11.jpg)' },
  img12: { backgroundImage: 'url(../static/gallery/12.jpg)' },
  img13: { backgroundImage: 'url(./static/gallery/13.jpg)' },
  img14: { backgroundImage: 'url(./static/gallery/14.jpg)' },
  img15: { backgroundImage: 'url(./static/gallery/15.jpg)' },
  img16: { backgroundImage: 'url(./static/gallery/16.jpg)' },
  img17: { backgroundImage: 'url(./static/gallery/17.jpg)' },
  img18: { backgroundImage: 'url(./static/gallery/18.jpg)' },
  imgwrapper: {
    position: 'relative',
    height: '100vh',
  },
  img: {
    width:'100%'
  },
  caption: {
    position: 'absolute',
    bottom: '50%',
    right: '50%',
    color: '#ffffff'
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
    margin: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(2, 1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 2),
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
  mapWrap: {
    backgroundColor: "#dfd2ae",
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(2, 0)
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(4, 2)
    }
  },
  contactWrap: {
    backgroundColor: "#dfd2ae",
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(2, 2)
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(4, 2)
    }
  },
  gridColorBeige: {
    backgroundColor: '#f4f2db'
  },
  colorFooter: {
    backgroundColor: '#dfd2ae',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0),
    }
  },
  gridColorDark: {
    backgroundColor: '#23262d'
  },
  gridMapColor: {
    backgroundColor: '#483119',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0),
    }
  },
  map: {
    width: '100%'
  },
  bold: {
    fontWeight: 500
  },
  italic: {
    fontWeight: 400,
    fontStyle: 'italic'
  },
  Wrap: {
    width: '100%',
    border: '1px solid #f4f2db',
    height: '260px'
  }
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      center: {
        lat: 17.488424,
        lng: -92.036562
      },
    };
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const { classes } = this.props;
    const mapOptions = {
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      styles: [{
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
  {
      "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
    },
    {
      "featureType": "administrative",
        "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        //{ "featureType": "poi.business", stylers: [{ visibility: "off", }]},
    {
      "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
    },
    {
      "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
    },
    {
      "featureType": "landscape.natural",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
    },
    {
      "featureType": "poi",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
    },
    {
      "featureType": "poi",
        "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
    },
    {
      "featureType": "poi.park",
        "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
    },
    {
      "featureType": "poi.park",
        "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
    },
    {
      "featureType": "road",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
    },
    {
      "featureType": "road.arterial",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
    },
    {
      "featureType": "road.highway",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
    },
    {
      "featureType": "road.highway",
        "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
    },
    {
      "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
    },
    {
      "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
    },
    {
      "featureType": "road.local",
        "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
    },
    {
      "featureType": "transit.line",
        "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
    },
    {
      "featureType": "transit.line",
        "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
    },
    {
      "featureType": "transit.station",
        "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
    },
    {
      "featureType": "water",
        "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
    },
    {
      "featureType": "water",
        "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]}
      ]};
    return (
      <Layout extendedHeader={true}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.wrapper}>
              <Carousel {...settings}>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img14)} />
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
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img7)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img9)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img11)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img12)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img15)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img16)} />
                </div>
                <div className={classes.imgwrapper}>
                  <div className={classNames(classes.image, classes.img17)} />
                </div>
              </Carousel>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={8} className={classes.gridColorDark}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="p" variant="h6" gutterBottom color='primary'>
                HOTEL
              </Typography>
              <Typography component="p" variant="subtitle1" color="primary">
                MAYABELL es un hotel y spa ubicado en Palenque, Chiapas. Ideal para consentirte en la alberca o jacuzzis, un agradable descanso en cualquiera de nuestras habitaciones de lujo, un masaje o buena comida en su restaurante exclusivo de comida internacional.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <Grid container spacing={2} className={classes.gridColorBeige}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="p" variant="h6" color='primary'>
                SPA
              </Typography>
              <Typography component="p" gutterBottom variant="subtitle1">
                Aquí la tranquilidad prevalece, ideal para que su estancia sea una experiencia rejuvenecedora. hidromasajes, faciales, corporales, terapias y Reiki son sólo algunos de los servicios que ofrecemos.
              </Typography>
              <img src='./static/gallery/11.jpg' className={classes.img} alt="" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="p" variant="h6" color='primary'>
                Alberca
              </Typography>
              <Typography component="p" variant="subtitle1" gutterBottom>
                Tomar el sol, convivir con los seres queridos y disfrutar de un buen atardecer es de los grandes placeres de la estancia.
                <br /><br />
              </Typography>
              <img src='./static/gallery/5.jpg' className={classes.img} alt="" />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.gridMapColor}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="p" variant="h6" color='primary'>
                EXPLORA LAS RUINAS
              </Typography>
              <Typography component="p" variant="subtitle1" gutterBottom>
                Mayabell is located 300 meters from the ruins, from here you can visit waterfalls, trekking, and tours to the jungle.
              </Typography>
              <img src='./static/gallery/ruins1080.jpg' className={classes.img} alt="" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={0}>
              <Typography component="p" variant="h6" color='primary'>
                EXPLORA Agua Azul
              </Typography>
              <Typography component="p" variant="subtitle1" gutterBottom>
                Mayabell is located 300 meters from the ruins, from here you can visit waterfalls, trekking, and tours to the jungle.
              </Typography>
              <img src='./static/gallery/aguaAzul.jpg' className={classes.img} alt="" />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.colorFooter}>
          <Grid item xs={12} md={3}>
            <Paper className={classes.contactWrap} elevation={0}>
              <Typography component="h2" variant="h6" gutterBottom color="secondary">CONTACTO</Typography>
              <Typography component="p" className={classes.bold} variant="subtitle1">Carretera Ruinas KM 6 - Mayabell</Typography>
              <Typography component="p" className={classes.italic} variant="subtitle1">A 500 Metros del sitio Arqueologico</Typography>
              <Typography component="p" className={classes.bold} variant="subtitle1">Palenque, Chiapas</Typography>
              <Typography component="p" className={classes.bold} variant="subtitle1">reservaciones@mayabell.mx</Typography>
              <Typography component="p" className={classes.bold} variant="subtitle1">(916) 688-0013</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper className={classes.mapWrap} elevation={0}>
              <div className={classes.Wrap}>
                {this.state.mounted > 0 && <GoogleMapReact options={mapOptions} bootstrapURLKeys={{ key: 'AIzaSyAjwT9l_e6OCw1h1s7YvvNJdGCOSAWL7nY' }} zoom={15} center={this.state.center}></GoogleMapReact>}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)