import React from 'react';
import '../App.css';

function BookCard({ book }){
    const { thumbnail } = book.volumeInfo.imageLinks || '';
    return(
        <div>
            {
            thumbnail &&
            <div width="200" height="500"><img src={ thumbnail } alt="Book Cover" width="70" height=""/><p>{book.volumeInfo.title} by {book.volumeInfo.authors}</p></div>
            }
        </div>
    )
}

export default BookCard;