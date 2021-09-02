import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
        color: '#fff'
    }
}));

export default function SimpleMenu({setShowMyBooks, setShowSearch}) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const myLibraryClick = () =>{
        setAnchorEl(null);
        setShowMyBooks(true);
        setShowSearch(false);
    }
    const searchBookClick = () => {
        setAnchorEl(null);
        setShowMyBooks(false);
        setShowSearch(true);
    }
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon className={classes.icon} />
                
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={myLibraryClick}>My Library</MenuItem>
                <MenuItem onClick={searchBookClick}>Search Books</MenuItem>
                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
    );
}
