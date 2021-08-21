import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUp(props){
    const classes = useStyles();

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

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>


        // <div>
        //     <form onSubmit={ handleSubmit }>
        //         <label htmlFor="firstName">First Name: </label>
        //         <input 
        //             type="text" 
        //             value={firstName}
        //             id="firstName"
        //             name="firstName"
        //             onChange={e=>setFirstName(e.target.value)}
        //         />
        //         <br />
        //         <label htmlFor="lastName">Last Name: </label>
        //         <input
        //             type="text"
        //             value={lastName}
        //             id="lastName"
        //             name="lastName"
        //             onChange={e => setLastName(e.target.value)}
        //         />
        //         <br />
        //         <label htmlFor="email">Email: </label>
        //         <input
        //             type="text"                    value={email}
        //             id="email"
        //             name="email"
        //             onChange={e => setEmail(e.target.value)}
        //         />
        //         <br />
        //         <label htmlFor="password">Password: </label>
        //         <input
        //             type="password"
        //             value={password}
        //             id="password"
        //             name="password"
        //             onChange={e => setPassword(e.target.value)}
        //         />
        //         <br />
        //         <button type="submit">
        //             Sign Up
        //         </button>
        //         <br />
        //         <Link to="/signin" >Already have an account? Sign In </Link>
        //     </form>
        // </div>
    );
}