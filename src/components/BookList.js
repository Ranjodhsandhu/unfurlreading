import React, { useState, useCallback, useEffect, useReducer } from 'react';
import BookCard from './BookCard';

function BookList({searchTerm}){
    const [books, setBooks] = useState([]);
    // const [, forceUpdate] = useReducer(x => x + 1, 0);
    
    const refresh = useCallback(async ()=>{
        // try{
        //     // fetch('api/books')
        //     //     .then(response => response.json())
        //     //     .then(({ data: books }) => {
        //     //         setBooks(books)
        //     //     });
        //     const response = await fetch('/api/books');
        //     const json = await response.json();
        //     const { data:books } = json;
        //     if(!response.ok){
        //         throw new Error('Could not get books');
        //     }
        //     setBooks(books);
        // }catch(e){
        //     console.log(e);
        // }
        try{
                const searchT = await searchTerm;
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchT ||' Wait '}&projection=lite&orderby=newest`);
                const json = await response.json();
                const { items:search } = json;
                setBooks(search);
            // }else{forceUpdate(); throw " No Search Term "};
        }catch(e){
            console.log("Google Books Search"+e);
        }
    }, []);

    useEffect(()=>{
        refresh();
    },[refresh,searchTerm]);

    return(
        <div>
            <br />
            {books.map(book=><BookCard key={book.id} book={book}/>)}
        </div>
    )
}

export default BookList;