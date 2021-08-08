import React, { useState, useCallback, useEffect, useRef, useReducer } from 'react';
import MyBooksCard from './MyBooksCard';

export default function MyBooks({ user }) {
    const [books, setBooks] = useState([]);
    const [, forceUpdate] = useReducer(x => x + 1, 0); //This empty state will help the component to re-render on state update from search submit button
    const mounted = useRef();
    const userId = user.id;
    const refresh = useCallback(async () => {
        try{
            const response = await fetch(`/api/books/${userId}`);
            const json = await response.json();
            const { data:books } = json;
            if(!response.ok){
                throw new Error('Could not get books');
            }
            setBooks(books);
        }catch(e){
            console.log(e);
        }
    }, [userId]);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
            refresh();
        } else {
            // do componentDidUpdate logic
            refresh();
            forceUpdate();
        }
    }, [refresh]);

    return (
        <div>
            <br />
            
            { books.map(book => <MyBooksCard key={book._id} book={book} /> )  }
            {books.length ===0 && <p>Please add Books to your library</p>}
        </div>
    )
}