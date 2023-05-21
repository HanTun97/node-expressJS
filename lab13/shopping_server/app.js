const express = require('express');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(express.json());

app.use('/books', productRouter);

app.listen(3000, ()=>console.log('listen on 3000'));