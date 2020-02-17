import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter  } from "next/router";
import Layout from "../../../layout/Layout";
import { TextField, Button, Paper, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GoogleMapReact from "google-map-react";
const styles = theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
    paddingTop: "56px",
    backgroundColor: "#f4f2db"
  },
  paper: {
    borderRadius: "0px",
    backgroundColor: "inherit",
    [theme.breakpoints.up("xs")]: {
      padding: "4px 24px"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "8px 4px"
    }
  },
  containerWrap: {
    backgroundColor: "#f4f2db"
  },
  button: {
    color: "#f4f2db",
    width: "100%",
    borderRadius: "0px"
  },
  paperDark: {
    background: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(10, 2)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(20, 2)
    }
  },
  gridColorDark: {
    backgroundImage: "url(../../../static/gallery/120.jpg)",
    backgroundPosition: "center center"
  },
  textField: {
    // border: '1px solid #483119',
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "76%"
    }
  },
  gridMapColor: {
    backgroundColor: "#dfd2ae"
  },
  map: {
    width: "100%"
  },
  bold: {
    fontWeight: 500
  },
  italic: {
    fontWeight: 400,
    fontStyle: "italic"
  },
  Wrap: {
    width: "100%",
    border: "1px solid #f4f2db",
    height: "230px"
  },
  mapWrap: {
    backgroundColor: "#dfd2ae",
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(0, 0)
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1, 2)
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
  card: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      margin: theme.spacing(4, 0)
    },
    [theme.breakpoints.up("sm")]: {
      width: "76%",
      margin: theme.spacing(4, 2)
    },
    backgroundColor: "transparent"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 280
  },
  controls: {
    textAlign: "center"
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
      }
    };
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const { classes } = this.props;
    const id = this.props.router.query.id;
    let  img = ''
    let title = ''
    switch (id) {
      case '1':
      img = "../static/gallery/4.jpg"
      title = "Bungalow Familiar"
      break;

      case '2':
        img = "../static/gallery/1.jpg"
        title = "Privada 1"
      break;
      case '3':
        img = "../static/gallery/11.jpg"
        title = "Privada 2"
      break;
      case '4':
        img = "../static/gallery/14.jpg"
        title = "Privada 3"
      break;
      case '5':
        img = "../static/gallery/1.jpg"
        title = "Privada 4"
      break;
      case '6':
        img = "../static/gallery/4.jpg"
        title = "Privada 5"
      break;
      case '7':
        img = "../static/gallery/11.jpg"
        title = "Privada 6"
      break;
      case '8':
        img = "../static/gallery/11.jpg"
        title = "Privada 7"
      break;
      default:
       
    }
    const mapOptions = {
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#ebe3cd"
            }
          ]
        },
        {
          elementType: "labels.text",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c9b2a6"
            }
          ]
        },
        //{ "featureType": "poi.business", stylers: [{ visibility: "off", }]},
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#dcd2be"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ae9e90"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#a5b076"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#447530"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f1e6"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#fdfcf8"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#f8c967"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#e9bc62"
            }
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#e98d58"
            }
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#db8555"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#806b63"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8f7d77"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ebe3cd"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#b9d3c2"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#92998d"
            }
          ]
        }
      ]
    };
    return (
      <Layout extendedHeader={false}>
        <div className={classes.wrapper}>
          <Grid container spacing={0} className={classes.gridColorDark}>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paperDark} elevation={0}>
                <Typography component="p" variant="h6" color="primary">
                  Book Your Room
                </Typography>
                <Typography component="p" variant="subtitle1" color="primary">
                  Let us know when you will be arriving and what kind of room
                  you would like to book. Make a reservation request now, pay
                  when you arrive.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.containerWrap}>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField className={classes.textField} label="Nombre" />
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField label="Apellidos" className={classes.textField} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.containerWrap}>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField label="Telefono" className={classes.textField} />
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField label="Email" className={classes.textField} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.containerWrap}>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  label="Numero de adultos"
                  className={classes.textField}
                />
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  label="Numero de Ninos (menos de 12)"
                  className={classes.textField}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.containerWrap}>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField label="Check-in" className={classes.textField} />
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField label="Check-out" className={classes.textField} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.containerWrap}>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField label="Mensaje" className={classes.textField} />
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <Card elevation={5} className={classes.card}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                      {title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        $ 4000 por noche
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                      <Button size="small" className={classes.button} variant="contained" color="secondary">Confirmar</Button>
                    </div>
                  </div>
                  <CardMedia className={classes.cover} image={img} title="" />
                </Card>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.gridMapColor}>
            <Grid item xs={12} md={3}>
              <Paper className={classes.contactWrap} elevation={0}>
                <Typography
                  component="h2"
                  variant="h6"
                  gutterBottom
                  color="secondary"
                >
                  CONTACTO
                </Typography>
                <Typography
                  component="p"
                  noWrap
                  className={classes.bold}
                  variant="subtitle1"
                >
                  Carretera Ruinas KM 6 - Mayabell
                </Typography>
                <Typography
                  component="p"
                  noWrap
                  className={classes.italic}
                  variant="subtitle1"
                >
                  A 500 Metros del sitio Arqueologico
                </Typography>
                <Typography
                  component="p"
                  className={classes.bold}
                  variant="subtitle1"
                >
                  Palenque, Chiapas
                </Typography>
                <Typography
                  component="p"
                  className={classes.bold}
                  variant="subtitle1"
                >
                  reservaciones@mayabell.mx
                </Typography>
                <Typography
                  component="p"
                  className={classes.bold}
                  variant="subtitle1"
                >
                  (916) 688-0013
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
              <Paper className={classes.mapWrap} elevation={0}>
                <div className={classes.Wrap}>
                  {this.state.mounted > 0 && (
                    <GoogleMapReact
                      options={mapOptions}
                      bootstrapURLKeys={{
                        key: "AIzaSyAjwT9l_e6OCw1h1s7YvvNJdGCOSAWL7nY"
                      }}
                      zoom={15}
                      center={this.state.center}
                    ></GoogleMapReact>
                  )}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}
export default withStyles(styles)(withRouter (Index));
