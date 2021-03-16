import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core'
import classNames from 'classnames';
import { useStyles } from '../../layouts/DashboardLayout/styles';


import { Context } from '../../context/Auth/AuthContext';
import { AuthTypes } from '../../types/AuthTypes';

const Header = (props) => {

    const {dispatch} = useContext(Context);
    const {
        open,
        handleDrawerOpen,
        ...rest
    } = props;
    const classes = useStyles();

    const logout = () => {
        dispatch({
            type: AuthTypes.logout
        })
    }

    return (
        <AppBar position="absolute" className={classNames(classes.appBar, open && classes.appBarShift)} {...rest}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                    </Typography>
                <Button className={classes.button} onClick={logout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
