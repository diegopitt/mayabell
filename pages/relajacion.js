import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Footer from '../layout/Footer'

const styles = theme => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: "48px",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "60px",
    }
  },
  paperBeige: {
    backgroundColor: '#f4f2db',
    margin: theme.spacing(2, 2),
  },
  gridColorBeige: {
    backgroundColor: '#f4f2db',
    paddingBottom:'24px'
  },
  img: {
    width: '100%'
  },
  paperDark: {
    background: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(4, 2)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 2),
      margin: theme.spacing(4, 2)
    }
  },
  gridColorDark: {
    backgroundColor: "#23262d",
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
        <div className={classes.root}>
        <Grid container spacing={0} className={classes.gridColorDark}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="p" variant="h5" gutterBottom color="primary">
              MASAJES & TEMAZCAL
              </Typography>
              <Typography component="p" variant="body2" color="primary">
              Aquí la tranquilidad prevalece, ideal para que su estancia sea una experiencia rejuvenecedora. Masajes faciales, corporales; temazcal y Reiki.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
          <Grid container spacing={0} className={classes.gridColorBeige}>
            <Grid item xs={12} md={7}>
              <Paper className={classes.paperBeige} elevation={0}>
                <Typography component="h2" variant="h6" color='primary'>
                  Relajante
                </Typography>
                <Typography gutterBottom component="p" variant="body2" color='secondary'>
                  Elimina el mal de fatiga mental. Además, podrá descansar durante toda la noche y al día siguiente sentirá un cambio físico.<br/>
                  <b>Precio: $400 ~ 30 min</b>
                </Typography>
              </Paper>
              <Paper className={classes.paperBeige} elevation={0}>
                <Typography component="h2" variant="h6" color='primary'>
                  Reflexologia
                </Typography>
                <Typography gutterBottom component="p" variant="body2" color='secondary'>
                  Por medio de los pies nos conectamos con todo el cuerpo activando o desactivando los puntos de acuerdo al comportamiento de las terminaciones nerviosas.<br/>
                  <b>Precio: $400 ~ 30 min</b>
                </Typography>
              </Paper>
              <Paper className={classes.paperBeige} elevation={0}>
                <Typography component="h2" variant="h6" color='primary'>
                  Antiestress
                </Typography>
                <Typography gutterBottom component="p" variant="body2" color='secondary'>
                  Ideal para quitar el estrés, bajar de talla, quitar nudos y descansar tranquilamente..<br/>
                  <b>Precio: $500 ~ 45 min</b>
                </Typography>
              </Paper>
              <Paper className={classes.paperBeige} elevation={0}>
                <Typography component="h2" variant="h6" color='primary'>
                  VIP
                </Typography>
                <Typography gutterBottom component="p" variant="body2" color='secondary'>
                  Relajante completo restituye la vitalidad dando sensación de bienestar. Acompañado de un masaje facial.<br/>
                  <b>Precio: $600 ~ 1 hora</b>
                </Typography>
              </Paper>
              <Paper className={classes.paperBeige} elevation={0}>
                <Typography component="h2" variant="h6" color='primary'>
                  Temazcal Maya
                </Typography>
                <Typography gutterBottom component="p" variant="body2" color='secondary'>
                  Baño de vapor el cual se genera al vertir una infusion de hierbas medicinales sobre las piedras que han sido expuestas al fuego con leña<br/>
                  <b>Precio: Pregunte por nuestros paquetes</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper className={classes.paperBeige} elevation={0}>
                <img src='./static/gallery/spa.jpg' className={classes.img} alt="" />
              </Paper>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)