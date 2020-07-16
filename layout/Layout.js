import React, { Fragment, Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import { withRouter } from 'next/router'
const styles = theme => ({
  content: {
    width: '100%',
    margin: 0,
    minHeight: '100%',
    overflow: 'hidden',
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  paper: {
    padding: '0px',
    borderRadius: '0px',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      padding: '0px'
    }
  },
  header: {},
});
class Layout extends Component {

  render() {
    const { classes, children, extendedHeader} = this.props;

    return (
      <Fragment>
        <Header extendedHeader={extendedHeader} className={classes.header} position="left-sidebar" />
        <main className={classes.content} id="mainContent">
          <section>
            <Paper className={classNames(classes.paper)} elevation={0}>
              {children}
            </Paper>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default (withStyles(styles)(withRouter(Layout)));
