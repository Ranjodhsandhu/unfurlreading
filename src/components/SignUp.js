import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(props){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    
    async function signUpUser(){
        try{
            const body = {
                email, password, firstName, lastName
            }

            const response = await fetch('/api/users',{
                method:'POST',
                headers: {
                    'Content-Type': 
                    'application/json',
                },
                body:JSON.stringify( body )
            });

            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message);
            }

            const loginResponse = await fetch('/api/users/signin',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body:JSON.stringify( {email, password} )
            });
            if(!loginResponse.ok){
                throw new Error(data.message);
            }
            props.getUser();

        }catch(err){
            console.log(' error? ');
            props.updateUser(undefined);
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUpUser();
    }
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name: </label>
                <input 
                    type="text" 
                    value={firstName}
                    id="firstName"
                    name="firstName"
                    onChange={e=>setFirstName(e.target.value)}
                />
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    value={lastName}
                    id="lastName"
                    name="lastName"
                    onChange={e => setLastName(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"                    value={email}
                    id="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    value={password}
                    id="password"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">
                    Sign Up
                </button>
                <br />
                <Link to="/signin" >Already have an account? Sign up </Link>
            </form>
        </div>
    );
}