const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./database/database');

const app = express();

mongoose.connect(dbConfig.url);

app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-Width, Content-Type, Accept')
    next()
})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./route/book-route')(app);

app.listen(3000, () => console.log("app listening in localhost 3000"));