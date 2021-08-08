import React from 'react';
import { useState } from 'react';
// import {
//     withRouter,
// } from 'react-router-dom';

import MyBooks from './MyBooks';
import SearchBook from './SearchBook';
import BookList from './BookList';

function Main(props){
    const { signOut } = props;
    const [search, setSearch] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        const searchValue = e.target.firstChild.value;
        setSearch(searchValue);
    }

    
    return (
        <div>
            <form onSubmit= { signOut } >
                <a href="/signout">
                    <button type="submit" >
                        Sign Out
                    </button>
                </a>
            </form>
            <h3>My Library</h3>
            <MyBooks user={props.user} />
            <h3>Search For Books</h3>
            <SearchBook handleSubmit={handleSubmit}/> 
            <BookList user={props.user} searchTerm={search}/> 

        </div>
    )
} 

export default Main; //withRouter(Main);