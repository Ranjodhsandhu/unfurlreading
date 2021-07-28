import React from 'react';
import './App.css';
import { BrowserRouter as Router,
    Route,
    Switch
    } from 'react-router-dom';

// import SearchBook from './components/SearchBook';
// import BookList from './components/BookList';
import  SignIn  from './components/SignIn';

function App() {
  // const [search, setSearch] = useState('');
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const searchValue = e.target.firstChild.value;
  //   setSearch(searchValue);
  // }

  return (
    <div className="App">
        <h1>Welcome to the <strong>Unfurl Reading</strong> Stage</h1>
        <Router>
          <Switch>
            <Route 
              exact path="/signin"
              render = {props => {
                return <SignIn />
              }}
              />
          </Switch>
        </Router>
            {/* <SearchBook handleSubmit={handleSubmit}/> */}
            {/* <BookList  searchTerm={search}/> */}
    </div>
  );
}

export default App;
