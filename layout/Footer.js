import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GoogleMapReact from "google-map-react";

const styles = theme => ({
  colorFooter: {
    backgroundColor: "#dfd2ae",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(1, 0)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 0)
    }
  },
  Wrap: {
    width: "100%",
    border: "1px solid #f4f2db",
    height: "230px"
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
  bold: {
    fontWeight: 600
  },
  italic: {
    fontStyle: "italic"
  },
  mapWrap: {
    backgroundColor: "#dfd2ae",
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(0, 0)
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1, 2)
    }
  }
});
class Footer extends Component {
  state = {
    mounted: false,
    center: {
      lat: 17.488424,
      lng: -92.036562
    }
  };
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const { classes } = this.props;
    const { turnDarker, anchorEl } = this.state;
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
      <Grid container spacing={0} className={classes.colorFooter}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.contactWrap} elevation={0}>
            <Typography component="h2" variant="h6" gutterBottom color="secondary">CONTACTO</Typography>
            <Typography component="p" className={classes.bold} variant="body1">Carretera Ruinas KM 6 - Mayabell</Typography>
            <Typography component="p" className={classes.italic} variant="body2">A 500 Metros del sitio Arqueologico</Typography>
            <Typography component="p" className={classes.bold} variant="body1">Palenque, Chiapas</Typography>
            <Typography component="p" className={classes.bold} variant="body1">reservaciones@mayabell.mx</Typography>
            <Typography component="p" className={classes.bold} variant="body1">(916) 688-0013</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.mapWrap} elevation={0}>
            <div className={classes.Wrap}>
              {this.state.mounted > 0 && <GoogleMapReact options={mapOptions} bootstrapURLKeys={{ key: 'AIzaSyBZMHeui6QHt3JXnzgFCLVolXN0JaTiNWA' }} zoom={15} center={this.state.center}></GoogleMapReact>}
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Footer);
