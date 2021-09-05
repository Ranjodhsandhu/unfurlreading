import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import SnackBar from '@material-ui/core/Snackbar';


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
    },
    snackMessage:{
        color:'#fff',
    },
    snackText: {
        display: 'block',
        textAlign: 'center',
        color: "#fff",
        background: "#000",
        padding: 10,
        borderRadius: 5,
        width: '200px'
    }
}));

function MyBooksCard({ book, getMyBooks }) {
    const classes = useStyles();
    const { _id:id , name, author, thumbnail } = book || '';
    // const summary = book.summary || '';
    const [removeBookBoolean, setRemoveBookBoolean] = useState(false);
    
    function timeout(delay = 0) {
        return new Promise(res => setTimeout(res, delay));
    }
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
        setRemoveBookBoolean(true);
        await timeout(1000);
        getMyBooks();
    }

    return (
        <div className={classes.mainContainer}>
            <CssBaseline />
            <SnackBar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={!!removeBookBoolean}
                autoHideDuration={1000}
                className={classes.snackMessage}
                message=''
                onClose={() => { setRemoveBookBoolean(false) }}
            >
                <span id="message-id">
                    <Typography className={classes.snackText}>Removing Book</Typography>
                </span>
            </SnackBar>
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
                    <CardActions onClick={ handleSubmit }>
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