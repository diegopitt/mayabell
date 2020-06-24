import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../layout/Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import classNames from 'classnames';
const styles = theme => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: "48px",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "60px",
    }
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
      padding: theme.spacing(2, 4),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2),
      padding: theme.spacing(2, 4),
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
  ruins: { backgroundImage: 'url(../static/gallery/ruins.jpg)' },
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
    fontSize: theme.typography.pxToRem(11),
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
      minWidth: "280px",
      maxWidth: "600px"
    }
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
        <div className={classes.root}>
          <Grid container spacing={0} className={classes.gridColorDark}>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paperDark} elevation={0}>
                <Typography component="p" variant="h5" color="primary" gutterBottom>
                  MAYABELL TOURS
                </Typography>
                <Typography component="p" variant="body2" color="primary">
                  Let us know when you will be arriving and what kind of room you
                  would like to book. Make a reservation request now, pay when you
                  arrive.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <GridList cols={2} cellHeight='auto' spacing={32} className={classes.gridList}>
                <GridListTile style={{ height: 'auto' }} className={classes.tileWrap}>
                  <div>
                    <div className={classNames(classes.image, classes.ruins)} />
                    <GridListTileBar className={classes.subtitleBar} title="Explora Las Ruinas" subtitle={<div className={classes.subtitle}>Mayabell se encuentra a 300 metros de las ruinas, desde aquí se pueden visitar cascadas, hacer trekking y excursiones por la selva</div>} />
                  </div>
                </GridListTile>
                <GridListTile style={{ height: 'auto' }} className={classes.tileWrap}>
                  <div>
                    <div className={classNames(classes.image, classes.waterfalls)} />
                    <GridListTileBar className={classes.subtitleBar} title="Explora Agua Azul" subtitle={<div className={classes.subtitle}>Agua Azul es una serie de cascadas que se encuentran en el río Xanil en el estado sureño a 68 kilómetros de Mayabell</div>} />
                  </div>
                </GridListTile>
                <GridListTile style={{ height: 'auto' }} className={classes.tileWrap}>
                  <div>
                    <div className={classNames(classes.image, classes.aguazul)} />
                    <GridListTileBar className={classes.subtitleBar} title="Explora Misol Há" subtitle={<div className={classes.subtitle}>Misol-Há es una cascada ubicada en el municipio de Salto de Agua, a 25 kilómetros de Mayabell</div>} />
                  </div>
                </GridListTile>
              </GridList>
            </Grid> 
          </Grid>
        </div>
      </Layout>
    );
  }
}
export default withStyles(styles)(Index);
