import React, { useState, useCallback, useEffect, useRef, useReducer} from 'react';
import BookCard from './BookCard';

function BookList({searchTerm}){
    const [books, setBooks] = useState([]);
    const [, forceUpdate] = useReducer(x => x + 1, 0); //This empty state will help the component to re-render on state update from search submit button
    const mounted = useRef();
    const refresh = useCallback(async (searchText)=>{
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
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText ||'Start'}&projection=lite&orderby=newest`);
                const json = await response.json();
                const { items:search } = json;
                setBooks(search);
            // }else{forceUpdate(); throw " No Search Term "};
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
            console.log(searchTerm);
        }
    },[refresh,searchTerm]);

    return(
        <div>
            <br />
            {books.map(book=><BookCard key={book.id} book={book}/>)}
        </div>
    )
}

export default BookList;