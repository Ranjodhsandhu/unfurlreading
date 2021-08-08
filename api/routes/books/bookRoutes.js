'use strict'

const express = require('express')
const router = express.Router()

const bookService = require('./bookService')

// GET /books/
// const params = useParams();
router.route('/:id')
  .get(async (req, res, next) => {
    try {
      const userId  = req.params.id;
      // // 1. Fetch my books from database
      const books = await bookService.listBooks( userId )
      // // 2. Respond with list of books
      res.status(200).send({
        data: books
        // "message":"Fetching the books with id"+req.params.id,
      })
    } catch (e) {
      // 3. If error, send to the error handler
      next(e)
    }
  })

// POST /books/
router.route('/')
  .post(async (req, res, next) => {
    // 1. Get data from request body  ``  1`  
    const { bookData } = req.body;
    try {
      // 2. Create book from data
      const book = await bookService.createBook(bookData)
      // 3. Respond with created book
      res.status(200).send({
        data: [book]
      })
    } catch (e) {
      // 4. If error, send to the error handler
      next(e)
    }
  })

  router.route('/remove')
        .post(async (req, res, next) => {
          const { id  } = req.body;
          try{
            await bookService.removeBook(id);
            res.json({success: id});
          }catch(e){
            next(e);
          }
        })

exports.router = router
