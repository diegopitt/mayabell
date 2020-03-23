import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Slider from "react-slick"
import classNames from 'classnames'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import IosArrowDropright from "react-ionicons/lib/IosArrowForward";
import IosArrowDropleft from "react-ionicons/lib/IosArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Footer from '../layout/Footer'
const styles = theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
  },
  paperBeige: {
    backgroundColor: '#ede7cc',
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1,1),
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1,1),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1,1)
    }
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
  gridColorDark2: {
    backgroundColor: '#dfd2ae',
    padding: theme.spacing(3, 0),
  },
  gridColorDark3: {
    paddingTop:70,
    backgroundImage: "url(../static/gallery/restaurant/r6.jpg)",
    backgroundPosition: "center center",
    backgroundRepeat: 'no-repeat',
    position:'relative',
    backgroundSize: 'cover',
    height: '48vh'
  },
  img: {
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
    const config = {
      arrows: true,
      infinite: true,
      autoplay: false,
      speed: 900,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />
    };
    return (
      <Layout extendedHeader={false}>
        <Grid container spacing={0} className={classes.gridColorDark3}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="p" variant="h5" color="primary" gutterBottom>
                NUESTRA COCINA
              </Typography>
              <Typography component="p" variant="subtitle2" color="primary">
                Distruta de la gastronomía de la región preparada con ingredientes naturales.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.gridColorDark2}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={2}>
              <Typography component="p" variant="h6" gutterBottom color='primary'>
                Pizzeria
              </Typography>
              <Typography component="p" variant="body2" color='secondary'>
                Distruta de la gastronomía de la región preparada con ingredientes naturales. Contamos con alternativas vegetarianas y un exquisito café.
                <br /><br />
              </Typography>
              <Slider {...config}>
                <div>
                  <img src='./static/gallery/restaurant/r7.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/r0.jpg' className={classes.img} alt="" />
                </div>
              </Slider>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={2}>
              <Typography component="p" variant="h6" gutterBottom color='primary'>
                Restobar
              </Typography>
              <Typography component="p" variant="body2" color='secondary'>
                Tomar el sol, convivir con los seres queridos y disfrutar de un buen atardecer es de los grandes placeres de la estancia.
                <br /><br />
              </Typography>
              <Slider {...config}>
                <div>
                  <img src='./static/gallery/restaurant/r5.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/e.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c.jpg' className={classes.img} alt="" />
                </div>
              </Slider>
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)