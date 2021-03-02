import React, { Fragment } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    const {
        text, icon: Icon, path
    } = props;
    
    const CustomLink = props => <Link to={path} {...props} />

    return (
        <ListItem button component={CustomLink}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}

export default React.memo(NavigationItem);
