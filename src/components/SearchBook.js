import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    searchWrapper:{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    searchGrid:{
        width:'45ch',
        display:'flex',
        flexDirection:'row',
    },
    searchButton:{
        marginLeft:10,
        width:100,
    }
}));

function SearchBook({handleSubmit}){
    const classes = useStyles();

    return(
        <div className={classes.searchWrapper}>
            <form className={classes.searchGrid} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="search" name="search" label="Enter Book or Author Name" defaultValue="javascript" fullWidth variant="outlined" size="small"/>
                    <Button className={classes.searchButton} variant="outlined" color="primary" type="submit" fullWidth={false} size="small">
                            Search
                    </Button>
            </form>
        </div>
    )
}

export default SearchBook;









