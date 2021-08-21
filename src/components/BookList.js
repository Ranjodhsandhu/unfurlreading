import React from 'react';
import BookCard from './BookCard';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

function BookList({user, books, getMyBooks}){
    const classes = useStyles();

    return(
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                    {
                        books && books.length > 0
                        ?
                        books.map(book =>{
                            return (<Grid
                                        xs={3}
                                        sm={6}
                                        md={4}
                                        item
                                        key={book.id}
                                    >
                                        <BookCard user={user} book={book} getMyBooks={getMyBooks} />
                                    </Grid>
                                )})
                        : null
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default BookList;