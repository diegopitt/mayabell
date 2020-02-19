import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { withRouter  } from "next/router"
import Layout from "../../../layout/Layout"
import { TextField, Button, Paper, Grid, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import GoogleMapReact from "google-map-react"
import Footer from '../../../layout/Footer'
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
          <Footer />
        </div>
      </Layout>
    );
  }
}
export default withStyles(styles)(withRouter (Index));
