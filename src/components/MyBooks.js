import React from 'react';
import MyBooksCard from './MyBooksCard';

export default function MyBooks({ books, getMyBooks }) {

    return (
        <div>
            <br />
            {books.map(book => <MyBooksCard key={book._id} book={book} getMyBooks={getMyBooks}/> )  }
            {books.length === 0 && <p>Please add Books to your library</p>}
        </div>
    )
}