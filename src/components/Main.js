import React, { useState, useCallback, useEffect, useRef, useReducer } from 'react';

import MyBooks from './MyBooks';
import SearchBook from './SearchBook';
import BookList from './BookList';
import Footer from './Footer';

// Design imports
import AppBar from '@material-ui/core/AppBar';
import NoteIcon from '@material-ui/icons/Note';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

function Main(props){

    const classes = useStyles();

    const { signOut, user } = props;
    const userId = user.id;

    const [search, setSearch] = useState('');
    const [googleBooks, setGoogleBooks] = useState([]);
    const [myBooks, setMyBooks] = useState([]);

    // This empty state will help the component to re-render on state update from search submit button
    const [, forceUpdate] = useReducer(x => x + 1, 0); 
    
    const mounted = useRef();
    
    const googleApiSearch = useCallback(async (searchText) => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText || 'javascript'}&projection=lite&orderby=newest`);
            const json = await response.json();
            const { items: search } = json;
            setGoogleBooks(search);
        } catch (e) {
            console.log("Google Books Search" + e);
        }
    }, []);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
            googleApiSearch();
        } else {
            // do componentDidUpdate logic
            googleApiSearch(search);
            forceUpdate();
        }
    }, [googleApiSearch, search]);


    const getMyBooks = useCallback(async () => {
        try {
            const response = await fetch(`/api/books/${userId}`);
            const json = await response.json();
            const { data: books } = json;
            if (!response.ok) {
                throw new Error('Could not get books');
            }
            setMyBooks(books);
        } catch (e) {
            console.log(e);
        }
    }, [userId]);


    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
            getMyBooks();
        } else {
            // do componentDidUpdate logic
            getMyBooks();
            forceUpdate();
        }
    }, [getMyBooks]);


    // Handle submit function to get the value from user and set in the search term state
    function handleSubmit(e) {
        e.preventDefault();
        const searchValue = e.target[0].value;//e.target.firstChild.value;
        // console.log(searchValue);
        // console.log(e.target[0].value);
        setSearch(searchValue);
    }

    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <NoteIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap className={classes.title} >
                        {
                            user
                                ? `Welcome ${user.firstName} to the Unfurl Reading Stage`
                                : 'Welcome to the Unfurl Reading Stage'
                        }
                    </Typography>
                    <Button color="inherit" onClick={signOut}>Logout</Button>
                </Toolbar>
            </AppBar>
            <div>
                <h3>My Library</h3>
                <MyBooks user={props.user} books={myBooks} getMyBooks={getMyBooks}/>
                <h3>Search For Books</h3>
                <SearchBook handleSubmit={handleSubmit}/> 
                <BookList user={user} searchTerm={search} books={googleBooks} getMyBooks={getMyBooks}/>
            </div>
            <Footer />
        </div>
    )
} 

export default Main;