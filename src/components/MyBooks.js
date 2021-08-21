import React from 'react';
import MyBooksCard from './MyBooksCard';

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

export default function MyBooks({ books, getMyBooks }) {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                    {
                        books && books.length > 0
                            ?
                            books.map(book => {
                                return (<Grid
                                    xs={3}
                                    sm={6}
                                    md={4}
                                    item
                                    key={book._id}
                                >
                                    <MyBooksCard book={book} getMyBooks={getMyBooks} />
                                </Grid>
                                )
                            })
                            : 'Please add Books to your library'
                    }
                </Grid>
            </Container>
        </div>
    )
}