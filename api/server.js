'use strict'

const mongoose = require('mongoose')
const express = require('express')
const cookieParser = require('cookie-parser');

// 1. Create main express intance
const app = express()

// 2. Require routes
const { router: bookRoutes } = require('./routes/books/bookRoutes')
const userRouter = require('./routes/users/userRoutes');

// 3. Require conatants
const { URL, PORT } = require('./utils/constants')

// 4. Ensure that the router is parsing the request body to appropriately format incoming requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// 5. Utilise routes
app.use('/api/books', bookRoutes)
app.use('/api/users', userRouter);

// 6. Define configuration for mongodb
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

// 7. Start server
mongoose
  .connect(URL, MONGO_CONFIG)
  .then(async () => {
    console.log(`Connected to database at ${URL}`)
    
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`)
    })
  
  })
  .catch((err) => {
    console.error(err)
  })
