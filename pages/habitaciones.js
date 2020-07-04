import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Layout from "../layout/Layout"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import GridList from "@material-ui/core/GridList"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import IosArrowDropright from "react-ionicons/lib/IosArrowDroprightCircle"
import IosArrowDropleft from "react-ionicons/lib/IosArrowDropleftCircle"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Router from 'next/router'

const styles = theme => ({
  root: {
    paddingTop: "36px",
    background: "#f4f2db"
  },
  card: {
    [theme.breakpoints.up("xs")]: {
      minWidth: "100%",
      maxWidth: "",
      margin: 0,
      cursor: 'pointer',
      marginBottom: 24,
      borderRadius: '4px',
      width: '100%',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "320px",
      margin: 8,
      maxWidth: "340px"
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "310px",
      maxWidth: "330px",
      margin: 8
    },
    backgroundColor: "#faf9ee",
    transition: "all .25s linear",
    boShadow: "0px 1px 2px 0px ",
    "&:hover": {
      boxShadow: "-1px 11px 20px 0px rgba(160, 125, 45, 0.8)"
    }
  },
  media: {
    height: 180
  },
  img1: { backgroundImage: "url(./static/gallery/rooms/11.jpg)" },
  img2: { backgroundImage: "url(./static/gallery/rooms/10.jpg)" },
  img3: { backgroundImage: "url(./static/gallery/rooms/9.jpg)" },
  img4: { backgroundImage: "url(./static/gallery/rooms/8.jpg)" },
  img5: { backgroundImage: "url(./static/gallery/rooms/7.jpg)" },
  img6: { backgroundImage: "url(./static/gallery/rooms/6.jpg)" },
  GridList: {
    margin: theme.spacing(2),
    padding: theme.spacing(6, 2)
  },
  paperDark: {
    backgroundColor: "#190f1b",
    margin: theme.spacing(6, 2),
    padding: theme.spacing(6, 2)
  },
  content: {
    padding: theme.spacing(2, 2)
  },
  action: {
    padding: theme.spacing(1, 1),
    textAlign:'right'
  },
  gridColorDark: {
    backgroundColor: "#23262d"
  },
  img: {
    width: "100%",
    height: 180
  },
  prev: {
    padding: "0px",
    margin: "0px",
    opacity: 0.7,
    position: "absolute",
    top: "50%",
    left: "5%",
    zIndex: 1
  },
  next: {
    padding: "0px",
    margin: "0px",
    opacity: 0.7,
    position: "absolute",
    top: "50%",
    right: "5%",
    zIndex: 1
  },
  button: {
    color: "#f4f2db"
  },
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const handleClick = (e, room) => {
      console.log(room)
      e.preventDefault()
      //router.push({ pathname: `${href}` })
    }
    const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <IconButton {...props} aria-label="prev" className={classes.prev}>
        <IosArrowDropleft fontSize="38px" color="#ffffff" />
      </IconButton>
    );
    const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <IconButton {...props} aria-label="next" className={classes.next}>
        <IosArrowDropright fontSize="38px" color="#ffffff" />
      </IconButton>
    );
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />
    };
    return (
      <Layout extendedHeader={false}>
        <Grid container spacing={10} className={classes.root}>
          <Grid item xs={12}>
            <GridList cellHeight="auto" className={classes.GridList}>
              <div className={classes.card}>
                <div>
                  <div className={classes.media}>
                    <Slider {...settings}>
                      <div>
                        <img src="./static/gallery/rooms/2.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/3.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/4.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/14.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <div className={classes.content}>
                    <Typography gutterBottom color="secondary" variant="subtitle2" component="h2">Suite Familiar</Typography>
                    <Typography variant="body2" color="secondary" component="p">
                    Suite Familiar con aire acondicionado con 1 cama king size, 2 camas matrimoniales y 1 cama individual, para 7 personas.
                    </Typography>
                  </div>
                  <div className={classes.action}>
                    <Button disableElevation size="small" className={classes.button} variant="contained" color="primary" onClick={ event => { Router.push('/reservas/[id]', `/reservas/1`) }}>Hacer Reservacion</Button>
                  </div>
                </div>
              </div>
              <div className={classes.card}>
                <div>
                  <div className={classes.media}>
                    <Slider {...settings}>
                    <div>
                        <img src="./static/gallery/rooms/v1.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/v2.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/v3.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/v4.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <div className={classes.content}>
                    <Typography gutterBottom color="secondary" variant="subtitle2" component="h2">Cabaña con ventilador</Typography>
                    <Typography variant="body2" color="secondary" component="p">
                      Cabaña con ventilador con 1 cama matrimonial, para 2 personas.<br /><br /><br />
                    </Typography>
                  </div>
                <div className={classes.action}>
                  <Button disableElevation size="small" className={classes.button} variant="contained" color="primary" onClick={ event => { Router.push('/reservas/[id]', `/reservas/2`) }}>Hacer Reservacion</Button>
                </div>
                </div>
              </div>
              <div className={classes.card}>
                <div>
                  <div className={classes.media}>
                    <Slider {...settings}>
                    <div>
                        <img src="./static/gallery/rooms/hv1.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/hv2.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <div className={classes.content}>
                    <Typography gutterBottom color="secondary" variant="subtitle2" component="h2">Habitación con  ventilador</Typography>
                    <Typography variant="body2" color="secondary" component="p">
                    Habitación con  ventilador con 1 cama matrimonial mas 1 cama individual, para 3 personas<br /><br />
                    </Typography>
                  </div>
                  <div className={classes.action}>
                    <Button disableElevation size="small" className={classes.button} variant="contained" color="primary" onClick={ event => { Router.push('/reservas/[id]', `/reservas/3`) }}>Hacer Reservacion</Button>
                  </div>
                </div>
              </div>
              <div className={classes.card}>
                <div>
                  <div className={classes.media}>
                    <Slider {...settings}>
                    <div>
                        <img src="./static/gallery/rooms/11.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/77.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <div className={classes.content}>
                    <Typography gutterBottom color="secondary" variant="subtitle2" component="h2">Habitación con aire acondicionado</Typography>
                    <Typography variant="body2" color="secondary" component="p">
                    Habitación con aire acondicionado con 1 cama matrimonial mas 1 cama individual , para 3 personas.
                    </Typography>
                  </div>
                  <div className={classes.action}>
                    <Button disableElevation size="small" className={classes.button} variant="contained" color="primary" onClick={ event => { Router.push('/reservas/[id]', `/reservas/4`) }}>Hacer Reservacion</Button>
                  </div>
                </div>
              </div>
              <div className={classes.card}>
                <div>
                  <div className={classes.media}>
                    <Slider {...settings}>
                      <div>
                        <img src="./static/gallery/rooms/5.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/aa1.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/rooms/aa2.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <div className={classes.content}>
                    <Typography gutterBottom color="secondary" variant="subtitle2" component="h2">
                    Habitación con aire acondicionado
                    </Typography>
                    <Typography variant="body2" color="secondary" component="p">
                    Habitación con aire acondicionado con 1 cama matrimonial, para 2 personas.<br /><br />
                    </Typography>
                  </div>
                  <div className={classes.action}>
                    <Button disableElevation size="small" className={classes.button} variant="contained" color="primary" onClick={ event => { Router.push('/reservas/[id]', `/reservas/5`) }}>Hacer Reservacion</Button>
                  </div>
                </div>
              </div>
            </GridList>
          </Grid>
        </Grid>
        <Grid container spacing={10} className={classes.gridColorDark}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="h2" variant="h6" gutterBottom color="primary">
                HOTEL
              </Typography>
              <Typography component="p" variant="subtitle1" color="primary">
                MAYABELL es un hotel y spa ubicado en Palenque, Chiapas. Ideal
                para consentirte en la alberca o jacuzzis, un agradable descanso
                en cualquiera de nuestras habitaciones de lujo, un masaje o
                buena comida en su restaurante exclusivo de comida
                internacional.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Layout>
    );
  }
}
export default withStyles(styles)(Index);
