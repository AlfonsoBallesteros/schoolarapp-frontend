import React from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from '../../constants/listItems';
import { Navigation } from '../../components/Navigation';
import { useStyles } from '../../layouts/DashboardLayout/styles';

const SideBar = (props) => {
    const { 
        open,
        handleDrawerClose
    } = props;

    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <Navigation items={mainListItems} />
            </List>
        </Drawer>
    )
}

export default SideBar
