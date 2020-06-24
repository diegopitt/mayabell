import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { withRouter  } from "next/router"
import Layout from "../../../layout/Layout"
import { TextField, Button, Paper, Grid, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import format from 'date-fns/format'
import DateFnsUtils from '@date-io/date-fns'
import getISOWeek from 'date-fns/getISOWeek'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
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
    background: "transparent",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(10, 2)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(2, 2)
    }
  },
  gridColorDark: {
    backgroundImage: "url(../../static/gallery/pool/p11.jpg)",
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
  dateP: {
    // margin: '22px 4px 0px 4px'
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
      checkout: null,
      checkin: null,
      center: {
        lat: 17.488424,
        lng: -92.036562
      }
    };
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  handleTemplateDate = (date) => {
    // const newState = { ...this.state };
    // const sdate = format(date, 'MM/dd/yyyy')
    // newState.values['checkin'] = sdate;
    // this.setState(newState);
  };
  handleCheckout = (date) => {
    // const newState = { ...this.state };
    // const sdate = format(date, 'MM/dd/yyyy')
    // newState.values['checkout'] = sdate;
    // this.setState(newState);
  };
  render() {
    const { classes } = this.props;
    const { checkin, checkout } = this.state;
    const id = this.props.router.query.id;
    let  img = ''
    let title = ''
    switch (id) {
      case '1':
      img = "../static/gallery/rooms/0.jpg"
      title = "Bungalow Familiar"
      break;
      case '2':
        img = "../static/gallery/rooms/1.jpg"
        title = "Privada 1"
      break;
      case '3':
        img = "../static/gallery/rooms/2.jpg"
        title = "Privada 2"
      break;
      case '4':
        img = "../static/gallery/rooms/3.jpg"
        title = "Privada 3"
      break;
      case '5':
        img = "../static/gallery/rooms/4.jpg"
        title = "Privada 4"
      break;
      case '6':
        img = "../static/gallery/rooms/5.jpg"
        title = "Privada 5"
      break;
      case '7':
        img = "../static/gallery/rooms/6.jpg"
        title = "Privada 6"
      break;
      case '8':
        img = "../static/gallery/rooms/7.jpg"
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
                  RESERVA TU HABITACION
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
                <TextField type="number" label="Numero de adultos" className={classes.textField} />
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField type="number" label="Numero de Ninos (menos de 12)" className={classes.textField} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.containerWrap}>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker disablePast className={classes.dateP} disableToolbar variant="inline" margin="normal" label="Check-In" id="date-picker-inline" value={checkin} onChange={this.handleTemplateDate} KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                </MuiPickersUtilsProvider>
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker disablePast className={classes.dateP} disableToolbar variant="inline" margin="normal" label="Check-Out" id="date-picker-inline" value={checkout} onChange={this.handleCheckout} KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                </MuiPickersUtilsProvider>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.containerWrap}>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <TextField label="Mensaje" multiline rowsMax="4" className={classes.textField} />
              </Paper>
            </Grid>
            <Grid align="center" item xs={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <Card elevation={5} className={classes.card}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="subtitle2">
                      {title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        X 4 Noches
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
