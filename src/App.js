import React, {useState} from 'react';
import './App.css';
import SearchBook from './components/SearchBook';
import BookList from './components/BookList';

function App() {
  const [search, setSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.firstChild.value;
    setSearch(searchValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the <strong>Unfurl Reading</strong> Stage</h1>
            <SearchBook handleSubmit={handleSubmit}/>
            <BookList  searchTerm={search}/>
      </header>
    </div>
  );
}

export default App;
