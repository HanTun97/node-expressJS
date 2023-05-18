const express = require("express");
const productRouter = require("./router/productRouter");
let app = express();

app.enable('case sensitive routing');

app.use(express.json());

app.use('/products', productRouter)



// app.get('/api/:id', (req, res, next) => {
//     let id = req.params.id;
//     res.send("this is your id:" + id);
// })
// app.use((req, res, next) => {
//     console.log('First middleware, it will excuted all the time');
//     next();
// })

// app.use('/json', (req, res, next) => {

//     res.json({ name: "Jhon", age: 25 });
// })
// app.use('/contact', (req, res, next) => {
//     res.send("you are in /contact");
// })


// app.use('/about', (req, res, next) => {
//     res.send("you are in /about");
// })

// app.use((req, res, next) => {
//     console.log('Second middleware');
//     res.send("Hello world");
//     console.log('after respond');
//     next()
// })

// app.use((req, res, next) => {
//     console.log('third middleware');
//     //  res.send("Hello world");
// })


//bootup
app.listen(3000, () => {
    console.log('Server is Started..');
})