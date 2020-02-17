import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../layout/Layout'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Slider from "react-slick"
import classNames from 'classnames'
const styles = theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
    background: '#23262d',
  },
  gridColor: {
    backgroundColor: '#ffffff'
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(6, 2),
    backgroundColor: 'transparent',

  },
  paperBeige: {
    backgroundColor: '#f4f2db',
    margin: theme.spacing(2),
    padding: theme.spacing(8, 2),
  },
  paperDark: {
    backgroundColor: '#190f1b',
    margin: theme.spacing(6, 2),
    padding: theme.spacing(6, 2),
  },
  gridColorBeige: {
    backgroundColor: '#f4f2db'
  },
  gridColorDark: {
    backgroundColor: '#23262d'
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
        <br />
        <br />
        <Grid container spacing={10} className={classes.gridColorBeige}>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>
        </Grid>
      </Layout>
    )
  };
}
export default withStyles(styles)(Index)