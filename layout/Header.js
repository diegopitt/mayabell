import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { withRouter } from 'next/router'
import Link from 'next/link'
const styles = theme => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: "flex",
    border: "0",
    padding: "1.625rem 0",
    width: "100%",
    transition: "all 400ms ease 0s",
  },
  darker: {
    opacity: 1,
    padding: 0,
    backgroundColor: '#ede7cc',
    backgroundAttachment: 'fixed',
    //borderBottom: '2px solid #94836f',
    boxShadow: theme.shadows[2],
  },
  darkcolor: {
    color: '#453420',
    opacity: 1,
    fontSize: '14px',
    fontWeight:'300',
    textTransform: 'none'
  },
  lightcolor: {
    color: '#ffffff',
    opacity: 1,
    fontSize: '14px',
    fontWeight:300,
    textTransform: 'none'
  },
  menuWrap: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    zIndex: 1
  },
  title: {
    flexGrow: 1,
  },
  linksWrap: {
    //whiteSpace: 'nowrap',
  },
  logosmall: {
    width: 126,
    cursor: 'pointer'
  },
  logo: {
    width: 116,
    cursor: 'pointer'
  },
  grow: {
    flexGrow: 1,
  },
});
class Header extends Component {
  state = {
    turnDarker: false
  };
  flagDarker = false;
  componentDidMount = async () => {
    window.addEventListener('scroll', this.handleScroll);
    if (!this.props.extendedHeader) {
      this.setState({ turnDarker: true });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = (scroll > 340);
    if (!this.props.extendedHeader) return;
    if (this.flagDarker !== newFlagDarker) {
      this.setState({ turnDarker: newFlagDarker });
      this.flagDarker = newFlagDarker;
    }
  }

  render() {
    const { classes, extendedHeader } = this.props;
    const { turnDarker } = this.state;
    return (
      <AppBar className={classNames(extendedHeader ? classes.appBar : classes.darker, extendedHeader && (turnDarker && classes.darker))}>
        <Toolbar>
          <Link href="/">
            <img src={turnDarker ? '../static/images/logo3.png' : '../static/images/logo2.png'} className={turnDarker ? classes.logo : classes.logosmall} alt="logo" />
          </Link>
          <div className={classes.grow} />
          <div className={classes.linksWrap}>
            <Link href="/habitaciones">
              <Button className={turnDarker ? classes.darkcolor : classes.lightcolor}>Habitaciones</Button>
            </Link>
            <Link href="/restaurante">
              <Button className={turnDarker ? classes.darkcolor : classes.lightcolor}>Restaurante</Button>
            </Link>
            <Link href="/relajacion">
              <Button className={turnDarker ? classes.darkcolor : classes.lightcolor}>Relajacion</Button>
            </Link>
            <Link href="/contacto">
              <Button className={turnDarker ? classes.darkcolor : classes.lightcolor}>Contacto</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(withRouter(Header));
