import React from 'react';
import '../App.css';

function BookCard({ book, user}){
    
    const { thumbnail } = book.volumeInfo.imageLinks || '';
    const name = book.volumeInfo.title;
    const author = book.volumeInfo.authors;
    const { searchInfo } = book;
    const summary = searchInfo ? searchInfo.textSnippet || '' : 'No Summary';
    const userId = user.id;
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('/api/books/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookData: { name, author, summary, thumbnail, userId } } )
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        // console.log(props);
        // props.getUser();

    }
    return(
        <div>
            {
            thumbnail &&
            <div width="200" height="500"><img src={ thumbnail } alt="Book Cover" width="70" height=""/><p>{ name } by { author }</p>
                <form onSubmit = { handleSubmit }>
                    <button type="submit">Add To Read</button>
                </form>
            </div>
            }
            <br />
            <br />
        </div>
    )
}

export default BookCard;