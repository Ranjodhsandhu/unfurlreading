import React from 'react';

// import SearchBook from './components/SearchBook';
// import BookList from './components/BookList';

export default function Main(){
    const signOut = async (e) => {
        e.preventDefault();
        await  fetch('/api/users/signout');
    }
    return (
        <div>
            Main Function
            <form onSubmit= { signOut } >
                <button type="submit">
                    Sign Out
                </button>
            </form>
        </div>
    )
} 


  // const [search, setSearch] = useState('');
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const searchValue = e.target.firstChild.value;
  //   setSearch(searchValue);
  // }



/* <SearchBook handleSubmit={handleSubmit}/> */ 
/* <BookList  searchTerm={search}/> */ 