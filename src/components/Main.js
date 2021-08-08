import React, { useState, useCallback, useEffect, useRef, useReducer } from 'react';
// import {
//     withRouter,
// } from 'react-router-dom';

import MyBooks from './MyBooks';
import SearchBook from './SearchBook';
import BookList from './BookList';

function Main(props){
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
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText || 'Starred'}&projection=lite&orderby=newest`);
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
        const searchValue = e.target.firstChild.value;
        setSearch(searchValue);
    }

    
    return (
        <div>
            <form onSubmit= { signOut } >
                <button type="submit" >
                    Sign Out
                </button>
            </form>
            <h3>My Library</h3>
            <MyBooks user={props.user} books={myBooks} getMyBooks={getMyBooks}/>
            <h3>Search For Books</h3>
            <SearchBook handleSubmit={handleSubmit}/> 
            <BookList user={user} searchTerm={search} books={googleBooks} getMyBooks={getMyBooks}/>
        </div>
    )
} 

export default Main; //withRouter(Main);