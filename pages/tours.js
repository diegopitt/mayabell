import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../layout/Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import classNames from 'classnames';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#f4f2db"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 640
  },

  gridColorDark: {
    paddingTop: "68px",
    backgroundColor: "#23262d"
  },
  gridColorBeige: {
    backgroundColor: "#f4f2db",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(1, 1)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 1)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 1)
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
  title: {
    fontSize: 16,
    fontWeight: 600
  },
  gridList: {
    backgroundColor: "#f4f2db",
    transform: 'translateZ(0)',
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(2),
      padding: theme.spacing(1, 1),
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2),
      padding: theme.spacing(2, 2),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2),
      padding: theme.spacing(2, 2),
    }
  },
  image:{
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '290px',
    opacity: 1,
  },
  ruins: { backgroundImage: 'url(../static/gallery/ruins1080.jpg)' },
  waterfalls: { backgroundImage: 'url(../static/gallery/misolha.jpg)' },
  aguazul: { backgroundImage: 'url(../static/gallery/aguaAzul.jpg)' },
  subtitleBar:{
    position: 'absolute',
    left: 0,
    padding:theme.spacing(1, 0),
    right: 0,
    height: 'auto',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.5,
    color: "#f4f2db",
    textOverflow: 'clip',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  tileWrap:{
    [theme.breakpoints.up("xs")]: {
      minWidth: '100%',
      maxWidth: '',
      width: '100%',
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "320px",
      maxWidth: "640px"
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "310px",
      maxWidth: "630px"
    },
  }
});
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const { classes } = this.props;
    return (
      <Layout extendedHeader={false}>
        <Grid container spacing={0} className={classes.gridColorDark}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paperDark} elevation={0}>
              <Typography component="p" variant="h6" color="primary">
                MAYABELL TOURS
              </Typography>
              <Typography component="p" variant="subtitle1" color="primary">
                Let us know when you will be arriving and what kind of room you
                would like to book. Make a reservation request now, pay when you
                arrive.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <GridList cols={2} cellHeight='auto' spacing={10} className={classes.gridList}>
              <GridListTile style={{ height: 'auto' }} className={classes.tileWrap}>
                <div>
                  <div className={classNames(classes.image, classes.ruins)} />
                  <GridListTileBar className={classes.subtitleBar} title="Explora Las Ruinas" subtitle={<div className={classes.subtitle}>Mayabell is located 300 meters from the ruins, from here you can visit local waterfalls, trekking, and tours to the jungle.</div>} />
                </div>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }} className={classes.tileWrap}>
                <div>
                  <div className={classNames(classes.image, classes.waterfalls)} />
                  <GridListTileBar className={classes.subtitleBar} title="Explora Agua Azul" subtitle={<div className={classes.subtitle}>Agua Azul are a series of waterfalls found on the Xanil River in the southern state 68 kilometres from Mayabell</div>} />
                </div>
              </GridListTile>
              <GridListTile style={{ height: 'auto' }} className={classes.tileWrap}>
                <div>
                  <div className={classNames(classes.image, classes.aguazul)} />
                  <GridListTileBar className={classes.subtitleBar} title="Explora Misol Há" subtitle={<div className={classes.subtitle}>Misol-Há is a waterfall located in the Municipality of Salto de Agua, 25 kilometers from Mayabell</div>} />
                </div>
              </GridListTile>
            </GridList>
          </Grid> 
        </Grid>
      </Layout>
    );
  }
}
export default withStyles(styles)(Index);
