import React from 'react';
import MyBooksCard from './MyBooksCard';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        border:'1px red solid',
    },
}));

export default function MyBooks({ books, getMyBooks }) {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ border: '1px green solid'}}>
                    {
                        books && books.length > 0
                        ?
                        books.map(book => {
                            return (<Grid xs={12} sm={6} md={2} item key={book._id}>
                                <MyBooksCard book={book} getMyBooks={getMyBooks} />
                            </Grid>
                            )
                        })
                        : 'Please add Books to your library'
                    }
                </Grid>
        </Container>
    )
}