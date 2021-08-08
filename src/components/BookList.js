import React, { useState, useCallback, useEffect, useRef, useReducer} from 'react';
import BookCard from './BookCard';

function BookList({searchTerm, user}){

    const [books, setBooks] = useState([]);
    const [, forceUpdate] = useReducer(x => x + 1, 0); //This empty state will help the component to re-render on state update from search submit button
    const mounted = useRef();
    const refresh = useCallback(async (searchText)=>{
        try{
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText || ''}&projection=lite&orderby=newest`);
                const json = await response.json();
                const { items:search } = json;
                setBooks(search);
        }catch(e){
            console.log("Google Books Search"+e);
        }
    }, []);

    useEffect(()=>{
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
            refresh();
        } else {
            // do componentDidUpdate logic
            refresh(searchTerm);
            forceUpdate();
        }
    },[refresh,searchTerm]);

    return(
        <div>
            <br />
            {books && books.length>0 ? books.map(book=><BookCard user={user} key={book.id} book={book}/>)
            : null}
        </div>
    )
}

export default BookList;