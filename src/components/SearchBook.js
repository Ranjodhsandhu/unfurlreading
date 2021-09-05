import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import IconButton from '@material-ui/core/IconButton';

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
    const [searchValue, setSearchValue ] = useState('')

    const handleSearchText = (e)=>{
        e.preventDefault();
        setSearchValue(e.target.value)
    }
    const handleClearValue = (e) => {
        e.preventDefault();
        setSearchValue('');
    }
    return(
        <div className={classes.searchWrapper}>
            <form className={classes.searchGrid} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField 
                        id="search" 
                        name="search" 
                        label="Enter Book or Author Name" 
                        value={searchValue}
                        onChange={handleSearchText}
                        fullWidth variant="outlined" 
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="delete text"
                                        onClick={handleClearValue}
                                        onMouseDown={handleClearValue}
                                        edge="end"
                                        color="primary"
                                    >
                                        <BackspaceOutlinedIcon fontSize="small"/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button className={classes.searchButton} variant="outlined" color="primary" type="submit" fullWidth={false} size="small">
                            Search
                    </Button>
            </form>
        </div>
    )
}

export default SearchBook;









