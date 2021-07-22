import React from 'react';

function SearchBook({handleSubmit}){
    return(
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" />
                <button type="submit" name="search">Search</button>
            </form>
        </div>
    )
}

export default SearchBook;