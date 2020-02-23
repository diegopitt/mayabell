import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../layout/Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import GridList from "@material-ui/core/GridList";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IosArrowDropright from "react-ionicons/lib/IosArrowDroprightCircle";
import IosArrowDropleft from "react-ionicons/lib/IosArrowDropleftCircle";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
const styles = theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
    background: "#23262d"
  },
  root: {
    //flexGrow: 1,
    background: "#f4f2db"
  },
  img: {
    width: "100%"
  },
  card: {
    [theme.breakpoints.up("xs")]: {
      minWidth: "100%",
      maxWidth: "",
      margin: 0,
      marginBottom: 24,
      width: "100%"
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
  img1: { backgroundImage: "url(./static/gallery/11.jpg)" },
  img2: { backgroundImage: "url(./static/gallery/10.jpg)" },
  img3: { backgroundImage: "url(./static/gallery/9.jpg)" },
  img4: { backgroundImage: "url(./static/gallery/8.jpg)" },
  img5: { backgroundImage: "url(./static/gallery/7.jpg)" },
  img6: { backgroundImage: "url(./static/gallery/61.jpg)" },
  GridList: {
    margin: theme.spacing(2),
    padding: theme.spacing(6, 2)
  },
  paperDark: {
    backgroundColor: "#190f1b",
    margin: theme.spacing(6, 2),
    padding: theme.spacing(6, 2)
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
  }
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const ArrowLeft = props => (
      <IconButton {...props} aria-label="prev" className={classes.prev}>
        <IosArrowDropleft fontSize="38px" color="#ffffff" />
      </IconButton>
    );
    const ArrowRight = props => (
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
        <br />
        <br />
        <Grid container spacing={10} className={classes.root}>
          <Grid item xs={12}>
            <GridList cellHeight="auto" className={classes.GridList}>
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.media}>
                    <Slider {...settings}>
                      <div>
                        <img src="./static/gallery/4.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/4.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/5.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">Bungalow Familiar</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/reservas/1">
                    <Button size="small" color="primary">Hacer Reservacion</Button>
                  </Link>
                </CardActions>
              </Card>
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.media}>
                    <Slider {...settings}>
                    <div>
                        <img src="./static/gallery/01.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/5.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/2.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h2">Habitacion Privada</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/reservas/2">
                    <Button size="small" color="primary">Hacer Reservacion</Button>
                  </Link>
                </CardActions>
              </Card>
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.media}>
                    <Slider {...settings}>
                    <div>
                        <img src="./static/gallery/1.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/5.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/7.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">Habitacion Privada</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/reservas/3">
                    <Button size="small" color="primary">Hacer Reservacion</Button>
                  </Link>
                </CardActions>
              </Card>
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.media}>
                    <Slider {...settings}>
                    <div>
                        <img src="./static/gallery/002.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/10.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/18.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">Habitacion Privada</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/reservas/4">
                    <Button size="small" color="primary">Hacer Reservacion</Button>
                  </Link>
                </CardActions>
              </Card>
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.media}>
                    <Slider {...settings}>
                      <div>
                        <img src="./static/gallery/7.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/4.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/5.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">Habitacion Privada</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/reservas/5">
                    <Button size="small" color="primary">Hacer Reservacion</Button>
                  </Link>
                </CardActions>
              </Card>
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.media}>
                    <Slider {...settings}>
                      <div>
                        <img src="./static/gallery/010.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/15.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/18.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">
                      Habitacion Privada
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/reservas/6">
                  <Button size="small" color="primary">Hacer Reservacion</Button>
                  </Link>
                </CardActions>
              </Card>
              <Card className={classes.card}>
                <CardActionArea>
                  <div className={classes.media}>
                    <Slider {...settings}>
                      <div>
                        <img src="./static/gallery/11.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/12.jpg" className={classes.img} alt="" />
                      </div>
                      <div>
                        <img src="./static/gallery/8.jpg" className={classes.img} alt="" />
                      </div>
                    </Slider>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">Habitacion Privada</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Casa completa que consta de 2 habitaciones c/u con baño completo, sala, comedor, cocina, terraza y 1/2 baño
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/reservas/7">
                    <Button size="small" color="primary">Hacer Reservacion</Button>
                  </Link>
                </CardActions>
              </Card>
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
