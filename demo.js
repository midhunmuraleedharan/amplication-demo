//app.js
'use strict'
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
// const session = require('express-session')
// const compress = require('compression')
// const sass = require('node-sass-middleware')

// Lambda does not allow you to configure environment variables, but dotenv is an
// excellent and simple solution, with the added benefit of allowing you to easily
// manage different environment variables per stage, developer, environment, etc.
require('dotenv').config()

const app = express()
const homeController = require('./controllers/home')
const petsController = require('./controllers/pets')

// MongoDB has a default timeout of 30s, which is the same timeout as API Gateway.
// Because API Gateway was initiated first, it also times out first. Reduce the
// timeout and kill the process so that the next request attempts to connect.
mongoose.connect(process.env.MONGODB_URI, { server: { socketOptions: { connectTimeoutMS: 10000 } } })
mongoose.connection.on('error', () => {
    console.error('Error connecting to MongoDB.')
    process.exit(1)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/*
* GZIP support is currently not available to API Gateway.
app.use(compress())

* node-sass is a native binary/library (aka Addon in Node.js) and thus must be
* compiled in the same environment (operating system) in which it will be run.
* If you absolutely need to use a native library, you can set up an Amazon EC2 instance
* running Amazon Linux for packaging your Lambda function.
* In the case of SASS, I recommend to build your CSS locally instead and
* deploy all static assets to Amazon S3 for improved performance.
const publicPath = path.join(__dirname, 'public')
app.use(sass({ src: publicPath, dest: publicPath, sourceMap: true}))
app.use(express.static(publicPath, { maxAge: 31557600000 }))

* Storing local state is unreliable due to automatic scaling. Consider going stateless (using REST),
* or use an external state store (for MongoDB, you can use the connect-mongo package)
app.use(session({ secret: process.env.SESSION_SECRET }))
*/

app.get('/', homeController.index)
app.get('/pets', petsController.listPets)
app.post('/pets', petsController.createPet)
app.get('/pets/:petId', petsController.getPet)
app.put('/pets/:petId', petsController.updatePet)
app.delete('/pets/:petId', petsController.deletePet)

/*
* aws-serverless-express communicates over a Unix domain socket. While it's not required
* to remove this line, I recommend doing so as it just sits idle.
app.listen(3000)
*/

// Export your Express configuration so that it can be consumed by the Lambda handler

module.exports = app