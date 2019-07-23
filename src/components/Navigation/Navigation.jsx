import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Toolbar, Typography, Drawer, List, ListItem, Collapse, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const Main = () => {

    const [open, setOpen] = useState(false);
    const [collapseOpen, setCollapseOpen] = useState(false);

    const handleClick = () => {
        setCollapseOpen(!collapseOpen);
    }

    const classes = makeStyles(theme => ({
        root: {
            display: "flex"
        },
        appBar: {
            zIndex: 1000,
            background: "rgb(29,29,29)",
            background: "linear-gradient(165deg, rgba(29,29,29,1) 0%, rgba(82,82,82,1) 100%)"
        },
        list: {
            width: '300px',
            background: "rgb(29,29,29)",
            color: "white",
        },
        listItem: {
            '&:hover, &:focus': {
                background: "rgba(125,125,125,.25)",
            }
        },
        drawer: {
            root: {
                background: "rgb(29,29,29)",
            }
        },
        drawerDiv: {
            height: "100%",
            background: "rgb(29,29,29)",
        },
        collapse: {
            marginLeft: "10%",
        },
        toolbar: theme.mixins.toolbar,
    }))();

    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <div>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        UI Tests
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer classes={classes.drawer} anchor="left" open={open} onClose={toggleDrawer}>
                <div className={classes.drawerDiv}>
                    <List className={classes.list}>
                        <ListItem className={classes.listItem} button component={Link} to="/">
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem className={classes.listItem} button onClick={handleClick}>
                            <ListItemText primary="Cards" />
                        </ListItem>
                        <Collapse className={classes.collapse} component="li" in={collapseOpen} timeout="auto" unmountOnExit>
                            <ListItem button className={classes.listItem} component={Link} to="/clip-path-test">
                                <ListItemText primary="Clip Path" onClick={toggleDrawer} />
                            </ListItem>
                            <ListItem button className={classes.listItem} >
                                <ListItemText primary="More Soon" />
                            </ListItem>
                        </Collapse>
                        <ListItem button className={classes.listItem} component={Link} to="/stepper-dots" >
                            <ListItemText primary="Stepper Dots" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <div className={classes.toolbar} />
        </div>
    )
}

export default Main
