import React from 'react';
import '../App.css';

function MyBooksCard({ book, getMyBooks }) {


    const { _id:id , name, author, thumbnail } = book || '';
    // const summary = book.summary || '';
    console.log(id);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/books/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( { id, name, author, thumbnail } )
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        getMyBooks();
    }


    return (
        <div>
            {
                <div width="200" height="500"><img src={thumbnail} alt="Book Cover" width="70" height="" /><p>{name} by {author}</p>
                    <form onSubmit={ handleSubmit }>
                        <button type="submit">Remove</button>
                    </form>
                </div>
            }
            <br />
            <br />
        </div>
    )
}

export default MyBooksCard;