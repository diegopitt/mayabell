import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick"
import classNames from 'classnames'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import IosArrowDropright from "react-ionicons/lib/IosArrowForward";
import IosArrowDropleft from "react-ionicons/lib/IosArrowBack";
import IconButton from "@material-ui/core/IconButton";
const styles = theme => ({
  gridMapColor: {
    backgroundColor: '#23262d',
    padding: theme.spacing(3, 0)
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

class Tours extends Component {
  state = {};
  componentDidMount() {

  }
  render() {
    const { classes } = this.props;
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
        <Grid container spacing={4} className={classes.gridMapColor}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={2}>
              <Typography component="p" variant="h6" color="secondary" gutterBottom>
              Cocina tradicional
              </Typography>
              <Slider {...config}>
                <div>
                  <img src='./static/gallery/restaurant/c1.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c2.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c3.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c4.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c5.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c6.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c8.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c9.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c10.jpg' className={classes.img} alt="" />
                </div>
              </Slider>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperBeige} elevation={2}>
              <Typography component="p" variant="h6" color="secondary" gutterBottom>
              Desayunos
              </Typography>
              <Slider {...config}>
                <div>
                  <img src='./static/gallery/restaurant/de3.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/de2.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/c7.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/de1.jpg' className={classes.img} alt="" />
                </div>
                <div>
                  <img src='./static/gallery/restaurant/de4.jpg' className={classes.img} alt="" />
                </div>
              </Slider>
            </Paper>
          </Grid>
        </Grid>
    );
  }
}
export default withStyles(styles)(Tours);
