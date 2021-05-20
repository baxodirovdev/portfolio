import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import menuLogo from "../../assets/images/logo2.jpeg";

import "./Header.css";
import { NavLink } from "react-router-dom";
import {
  AccountBox,
  Email,
  GitHub,
  Home,
  Instagram,
  SettingsEthernet,
  Telegram,
  Work,
  YouTube,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export const Header = () => {
  const classes = useStyles();

  const [menuPanel, setMenuPanel] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuPanel(open);
  };

  const list = () => (
    <div
      className="header__list"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List></List>
      <List>
        <NavLink to="/">
          <ListItem className="header__item" button>
            <Home className="header__span" />
            <ListItemText className="header__span">HOME</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/about">
          <ListItem className="header__item" button>
            <AccountBox className="header__span" />
            <ListItemText className="header__span">CV</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/skills">
          <ListItem className="header__item" button>
            <SettingsEthernet className="header__span" />
            <ListItemText className="header__span">SKILLS</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/work">
          <ListItem className="header__item" button>
            <Work className="header__span" />
            <ListItemText className="header__span">WORK</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/contact">
          <ListItem className="header__item" button>
            <Email className="header__span" />
            <ListItemText className="header__span">CONTACT</ListItemText>
          </ListItem>
        </NavLink>
      </List>
      <List className="header__socialNetworks">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <ListItem button>
            <YouTube />
          </ListItem>
        </a>

        <a
          href="https://github.com/baxodirovdev"
          target="_blank"
          rel="noreferrer"
        >
          <ListItem  button>
            <GitHub />
          </ListItem>
        </a>

        <a href="https://t.me/baxodirovdev" target="_blank" rel="noreferrer">
          <ListItem  button>
            <Telegram />
          </ListItem>
        </a>

        <a
          href="https://www.instagram.com/baxodirovdev"
          target="_blank"
          rel="noreferrer"
        >
          <ListItem  button>
            <Instagram />
          </ListItem>
        </a>
      </List>
    </div>
  );

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(!menuPanel)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Avatar alt="Remy Sharp" src={menuLogo}  />
        </Toolbar>
      </AppBar>
      <Drawer open={menuPanel} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};
