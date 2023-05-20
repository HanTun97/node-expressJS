const express = require('express');
const path = require('path');

const homeRouter = require('./server/routers/homeRouter');
const usersRouter = require('./server/routers/usersRouter');
const productsRouter = require('./server/routers/productsRouter');

const app = express();

//middlewares
app.use(express.static(path.join(__dirname, 'public', 'assets')));
app.use('/', homeRouter);
app.use('/user', usersRouter);
app.use('/product', productsRouter);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'assets', 'views', '404.html'));
})

//error handling middleware
app.use(function (error, req, res, next) {
    res.status(500).send('Something wrong');
});


//bootup
app.listen(3000, () => console.log('listening on ' + 3000));