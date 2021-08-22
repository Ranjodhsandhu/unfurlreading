'use strict'

const mongoose = require('mongoose')
const express = require('express')
const cookieParser = require('cookie-parser');
const path = require('path');
// const jade = require('jade');

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

// Putting this line of code cause of Status code 304 in Network tab of browser
// app.disable('etag'); // not required now because I removed the infinite call from useEffect() by passing empty array as second arguments


// 5. Utilise routes
app.use('/api/books', bookRoutes)
app.use('/api/users', userRouter);

/// setting the view engine for the app to jade language // working out with the sign out process render('/') error in server
// app.set('view engine', 'jade'); // not required now because not using res.render("/") in sign out api


// 6. Define configuration for mongodb
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

// if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.resolve(__dirname,'../build')));

  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'../build/index.html'));
  })
// }

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
