'use strict'

const { model: Book } = require('./bookModel')

// Helper function to list each of the books in the database
exports.listBooks = async ( userId ) => {
  try {
    const books = await Book.find({ userId })
    return books
  } catch (e) {
    throw e
  }
}

// Create a new book that will be added to the database
exports.createBook = async (bookData) => {
  // 1. Create a book instance
  const book = new Book(bookData)
  try {
    // 2. Save book to database
    const doc = await book.save()
    // 3. return with created book
    return doc
  } catch (e) {
    // 4. If error, throw and controller will catch
    throw e
  }
}

exports.removeBook = async (bookId) => {
  try{
    
    Book.deleteOne({_id: bookId}, function(err, results) {});

  }catch(e){
    throw e;
  }
}
