const express = require('express');
const path = require('path');

const productRouter = require('./user/routers/productRouter');
const bookRouter = require('./user/routers/bookRouter');

const app = express();

//middlewares
app.use(express.static(path.join(__dirname, 'public', 'assets')));
app.use('/product', productRouter);
app.use('/book', bookRouter);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'assets', 'views', '404.html'));
})

//error handling middleware
app.use(function (error, req, res, next) {
    res.status(500).send('Something wrong');
});


//bootup
app.listen(3000, () => console.log('listening on ' + 3000));