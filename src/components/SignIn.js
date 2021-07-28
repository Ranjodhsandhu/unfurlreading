import  React, { useState }  from 'react';
import { Link } from 'react-router-dom';

export default function SignIn(props){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('/api/users/signin', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({ email, password })
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error( data.message );
        }
        console.log(props);
        props.getUser();

    }
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                
                <label htmlFor="email">Email Address:</label>
                <input type="text" value={email}id="email" name="email" onChange={(e)=> {setEmail(e.target.value);}} required/>
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} id="password" name="password" onChange={(e) => { setPassword(e.target.value); }} required/>
                <br />
                <button type="submit">Sign In</button>
                <br />
                <Link to="/signup">Don't have an account? Sign Up</Link>
            </form>
        </div>
    )
}
