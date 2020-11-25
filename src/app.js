const express = require('express');
const bodyParser = require('body-parser')

const codeHandlerNotFound = require('./middleware/code-handler-not-found');
const errorHandler = require('./middleware/error-handler');

const app = express()
const weiboRouter = require('./router/weibo')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/weibo', weiboRouter)

app.use(codeHandlerNotFound)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('server start!');
})