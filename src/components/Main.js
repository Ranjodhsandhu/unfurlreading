import React from 'react';
import { useState } from 'react';
// import {
//     withRouter,
// } from 'react-router-dom';

import MyBooks from './MyBooks';
import SearchBook from './SearchBook';
import BookList from './BookList';

function Main(props){
    const {setUser} = props;
    const [search, setSearch] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const searchValue = e.target.firstChild.value;
        setSearch(searchValue);
    }

    const signOut = async function (e){
        e.preventDefault();
        await  fetch('/api/users/signout')
                .then(()=>{setUser(undefined);})
        // return <Router>
        //     <Redirect to="/" />
        // </Router>
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
            <MyBooks />
            <h3>Search For Books</h3>
            <SearchBook handleSubmit={handleSubmit}/> 
            <BookList  searchTerm={search}/> 

        </div>
    )
} 

export default Main; //withRouter(Main);