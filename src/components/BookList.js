import React from 'react';
import BookCard from './BookCard';

function BookList({user, books, getMyBooks}){

    return(
        <div>
            <br />
            {books && books.length>0 ? books.map(book=><BookCard user={user} key={book.id} book={book} getMyBooks={getMyBooks}/>)
            : null}
        </div>
    )
}

export default BookList;