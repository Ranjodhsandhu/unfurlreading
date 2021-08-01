import React from 'react';
import { useState } from 'react';
// import {
//     withRouter,
// } from 'react-router-dom';

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
            Main Function
            <form onSubmit= { signOut } >
                <a href="/signout">
                    <button type="submit" >
                        Sign Out
                    </button>
                </a>
            </form>
            <SearchBook handleSubmit={handleSubmit}/> 
            <BookList  searchTerm={search}/> 
        </div>
    )
} 

export default Main; //withRouter(Main);