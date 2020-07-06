import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { withRouter  } from "next/router"
import Layout from "../../../layout/Layout"
import { TextField, Button, Paper, Grid, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import format from 'date-fns/format'
import fetch from 'node-fetch'
import DateFnsUtils from '@date-io/date-fns'
import isAfter from 'date-fns/isAfter'
import addDays from 'date-fns/addDays'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
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
      margin: theme.spacing(1, 2)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(2, 2)
    }
  },
  gridColorDark: {
    backgroundImage: "url(../../static/gallery/pool/p11.jpg)",
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
    width: 340
  },
  controls: {
    textAlign: "center"
  }
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      submitting: false,
      nights: 1,
      name_e: false,
      lastname_e: false,
      adults_e: false,
      email_e: false,
      checkout_e: false,
      checkin_e: false,
      phone_e: false,
      inputs:{
        name: '',
        lastname: '',
        adults: 1,
        children: 0,
        email: '',
        message: '',
        checkout: format(addDays(new Date(),1), 'MM/dd/yyyy'),
        checkin: format(new Date(), 'MM/dd/yyyy'),
        phone: ''
      }
    };
  }
  handleInputChange = (name, value) => {
    const newState = { ...this.state }
    newState.inputs[name] = value
    this.setState(newState)
  };
  handleOnSubmit = async e => {
    e.preventDefault()
    let errors = false
    this.setState({ submitting: true })
    if (this.state.inputs.name === ''){
      this.setState({ name_e: true })
      errors = true
    }
    if (this.state.inputs.lastname === ''){
      this.setState({ lastname_e: true })
      errors = true
    }
    if (this.state.inputs.phone === ''){
      this.setState({ phone_e: true })
      errors = true
    }
    if (this.state.inputs.adults === ''){
      this.setState({ adults_e: true })
      errors = true
    }
    if (this.state.inputs.email === ''){
      this.setState({ email_e: true })
      errors = true
    }
    if (errors === true){
      this.setState({ submitting: false })
      return null;
    }
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: this.state.inputs })
    })
    const text = await res.text()
    this.handleResponse(res.status, text)
  }
  handleResponse = (status, msg) => {
    if (status === 200) {
      this.setState({
        submitted: true,
        submitting: false,
      })
    } else {
      //this.setState({ })
    }
  }

  handleCheckin = (date) => {
    const newState = { ...this.state };
    const sdate = format(date, 'MM/dd/yyyy')
    newState.inputs['checkin'] = sdate;
    if (isAfter(new Date(sdate), new Date(this.state.inputs.checkout))){
      newState.inputs['checkout'] = format(addDays(date,1), 'MM/dd/yyyy');
    }
    const total_nights = differenceInCalendarDays(new Date(this.state.inputs.checkout), new Date(sdate))
    newState['nights'] = total_nights;
    this.setState(newState);
  };
  handleCheckout = (date) => {
    const newState = { ...this.state };
    const sdate = format(date, 'MM/dd/yyyy')
    if (isAfter(new Date(this.state.inputs.checkout), new Date(sdate))){
      newState.inputs['checkin'] = format(addDays(date,-1), 'MM/dd/yyyy');
    }
    const total_nights = differenceInCalendarDays(new Date(sdate), new Date(this.state.inputs.checkin))
    newState['nights'] = total_nights;
    newState.inputs['checkout'] = sdate;
    this.setState(newState);
  };
  render() {
    const { classes } = this.props;
    const { submitted, nights,  submitting, inputs, name_e, lastname_e,  adults_e, email_e, checkout_e, checkin_e, phone_e } = this.state;
    const id = this.props.router.query.id;
    let  img = ''
    let title = ''
    switch (id) {
      case '1':
      img = "../static/gallery/rooms/2.jpg"
      title = "Suite Familiar"
      break;
      case '2':
        img = "../static/gallery/rooms/v1.jpg"
        title = "Cabaña con ventilador"
      break;
      case '3':
        img = "../static/gallery/rooms/hv1.jpg"
        title = "Habitación con  ventilador"
      break;
      case '4':
        img = "../static/gallery/rooms/11.jpg"
        title = "Habitación con aire acondicionado"
      break;
      case '5':
        img = "../static/gallery/rooms/5.jpg"
        title = "Habitación con aire acondicionado"
      break;
      default:
       
    }
    return (
      <Layout extendedHeader={false}>
        <div className={classes.wrapper}>
          <Grid container spacing={0} className={classes.gridColorDark}>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paperDark} elevation={0}>
                <Typography hidden={submitted} component="p" variant="h6" color="primary">
                  RESERVA TU HABITACION
                </Typography>
                <Typography hidden={!submitted} gutterBottom component="p" variant="h6" color="primary" gutterBottom>
                  HEMOS RECIBIDO TU RESERVACION
                </Typography>
                <Typography gutterBottom hidden={!submitted} component="p" variant="body2" color="primary">
                  Nos pondremos en contacto al correo electronico que nos proporcionaste.<br /> Muchas gracias!
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <div hidden={submitted}>
            <Grid container spacing={0} className={classes.containerWrap}>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <TextField error={name_e} onChange={event => this.handleInputChange('name', event.target.value)} value={inputs.name} className={classes.textField} label="Nombre" />
                </Paper>
              </Grid>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <TextField error={lastname_e} onChange={event => this.handleInputChange('lastname', event.target.value)} value={inputs.lastname} label="Apellidos" className={classes.textField} />
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.containerWrap}>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <TextField error={phone_e} onChange={event => this.handleInputChange('phone', event.target.value)} value={inputs.phone} label="Telefono" className={classes.textField} />
                </Paper>
              </Grid>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <TextField error={email_e} onChange={event => this.handleInputChange('email', event.target.value)} value={inputs.email} label="Email" className={classes.textField} />
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.containerWrap}>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <TextField error={adults_e} onChange={event => this.handleInputChange('adults', event.target.value)} value={inputs.adults} type="number" label="Numero de adultos" className={classes.textField} />
                </Paper>
              </Grid>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <TextField value={inputs.children} onChange={event => this.handleInputChange('children', event.target.value)} type="number" label="Numero de Ninos (menos de 12)" className={classes.textField} />
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.containerWrap}>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker disablePast className={classes.dateP} disableToolbar variant="inline" margin="normal" label="Check-In" id="date-picker-inline" value={inputs.checkin} onChange={this.handleCheckin} KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                  </MuiPickersUtilsProvider>
                </Paper>
              </Grid>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker disablePast className={classes.dateP} disableToolbar variant="inline" margin="normal" label="Check-Out" id="date-picker-inline2" value={inputs.checkout} onChange={this.handleCheckout} KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                  </MuiPickersUtilsProvider>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.containerWrap}>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <TextField label="Mensaje" onChange={event => this.handleInputChange('message', event.target.value)} multiline rowsMax="4" className={classes.textField} />
                </Paper>
              </Grid>
              <Grid align="center" item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <Card elevation={5} className={classes.card}>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h5" variant="subtitle1">
                        {title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          X {nights} Noches
                        </Typography>
                      </CardContent>
                      <div className={classes.controls}>
                        <Button disabled={submitting || submitted}  size="small" className={classes.button} onClick={this.handleOnSubmit} variant="contained" color="secondary">Confirmar</Button>
                      </div>
                    </div>
                    <CardMedia className={classes.cover} image={img} title="" />
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}
export default withStyles(styles)(withRouter (Index));
