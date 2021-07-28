import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,
    Route,
    Switch,
    Redirect
    } from 'react-router-dom';

import  SignIn  from './components/SignIn';
import Main from './components/Main';
import SignUp from './components/SignUp';


function App() {
  const [ user, setUser ] = useState(undefined);
  const getUser = useCallback( async function (){
    try{
      const response = await fetch('/api/users/me');
      const json = await response.json();
      if(!response.ok){
        throw new Error(json.message);
      }

      setUser(json.data);
    }catch(err){
      console.log(err.message);
      setUser(undefined);
    }
  });

  useEffect(()=>{
    getUser();
  }, [getUser]);


  return (
    <div className="App">
        <h1>Welcome to the <strong>Unfurl Reading</strong> Stage</h1>
        <Router>
          <Switch>
            <Route 
              exact 
              path="/signin"
              render = {props => {
                if(user){
                  return <Redirect to="/" />
                }
                return <SignIn getUser={getUser} {...props} />
              }}
              />
            <Route 
              exact
              path="/signup"
              render={ props =>{
                if(user){
                  return <Redirect to="/" />
                }

                return <SignUp getUser={getUser}updateUser={setUser} {...props}/>
              }}
            />
            <Route
              path="/"
              render={ props => {
                if(!user){
                  return <Redirect to="/signin" />
                }
                return <Main {...props} />
              }}
            />
          </Switch>
        </Router>
            
    </div>
  );
}

export default App;
