import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "next/router";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "next/link";
import IosAppsOutline from "react-ionicons/lib/IosMenu";
const styles = theme => ({
  appBar: {
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    border: "0",
    padding: "1.625rem 0",
    width: "100%",
    transition: "all 800ms ease 0s"
  },
  darker: {
    opacity: 1,
    padding: 0,
    backgroundColor: "#ede7cc",
    backgroundAttachment: "fixed",
    //borderBottom: '2px solid #94836f',
    boxShadow: theme.shadows[2]
  },
  darkcolor: {
    color: "#453420",
    opacity: 1,
    fontSize: 13,
    fontWeight: 500,
    textTransform: "none"
  },
  lightcolor: {
    color: "#ffffff",
    opacity: 1,
    fontSize: 13,
    fontWeight: 500,
    textTransform: "none"
  },
  menuWrap: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    zIndex: 1
  },
  linksWrap: {
    //whiteSpace: 'nowrap',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  menuWrap: {
    //whiteSpace: 'nowrap',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  logosmall: {
    width: 116,
    cursor: "pointer"
  },
  logo: {
    width: 106,
    cursor: "pointer"
  },
  grow: {
    flexGrow: 1
  }
});
class Header extends Component {
  state = {
    turnDarker: false,
    anchorEl: null
  };
  flagDarker = false;
  componentDidMount = async () => {
    window.addEventListener("scroll", this.handleScroll);
    if (!this.props.extendedHeader) {
      this.setState({ turnDarker: true });
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = scroll > 340;
    if (!this.props.extendedHeader) return;
    if (this.flagDarker !== newFlagDarker) {
      this.setState({ turnDarker: newFlagDarker });
      this.flagDarker = newFlagDarker;
    }
  };
  render() {
    const { classes, extendedHeader } = this.props;
    const { turnDarker, anchorEl } = this.state;
    return (
      <AppBar className={classNames( extendedHeader ? classes.appBar : classes.darker, extendedHeader && turnDarker && classes.darker)}>
        <Toolbar>
          <Link href="/">
            <img src={ turnDarker ? "../static/images/logo3.png" : "../static/images/logo2.png" } className={turnDarker ? classes.logo : classes.logosmall} alt="logo" />
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
            <Link href="/tours">
              <Button className={turnDarker ? classes.darkcolor : classes.lightcolor}>Tours</Button>
            </Link>
          </div>
          <div className={classes.menuWrap}>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} size="small">
              <IosAppsOutline color={turnDarker ? '#483119' : '#FFFFFF'} fontSize="30px" />
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={this.handleClose}>
              <div>
                <Link href="/habitaciones">
                  <MenuItem onClick={this.handleClose}>Habitaciones</MenuItem>
                </Link>
                <Link href="/restaurante">
                  <MenuItem onClick={this.handleClose}>Restaurante</MenuItem>
                </Link>
                <Link href="/relajacion">
                  <MenuItem onClick={this.handleClose}>Relajacion</MenuItem>
                </Link>
                <Link href="/tours">
                  <MenuItem onClick={this.handleClose}>Tours</MenuItem>
                </Link>
              </div>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(withRouter(Header));
