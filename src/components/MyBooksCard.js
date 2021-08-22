import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        paddingTop: 10,
        paddingBottom: 10,
        maxWidth: 270,
        minWidth: 270,
        maxHeight: 400,
        minHeight: 400,
    },
    bookContainer: {
        maxWidth: 280,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    book: {
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        height: 140,
        width: 100,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    }
}));

function MyBooksCard({ book, getMyBooks }) {
    const classes = useStyles();


    const { _id:id , name, author, thumbnail } = book || '';
    // const summary = book.summary || '';
    // console.log(id);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/books/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( { id, name, author, thumbnail } )
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        getMyBooks();
    }

    return (
        <div className={classes.mainContainer}>
            <Card className={classes.root}>
                <CardContent className={classes.bookContainer}>
                    <CardActionArea className={classes.book}>
                        <CardMedia
                            className={classes.media}
                            image={thumbnail}
                            title="Book Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {`By ${author}`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions onClick={handleSubmit}>
                        <Button size="small" color="primary">
                            Remove From Library
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default MyBooksCard;