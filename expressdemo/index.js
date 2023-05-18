const express = require('express');
const fs = require('fs');
const app = express();



//config
app.enable("case-sensitive");

//middleware
app.use(cors())
// app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res, next) => {
    //res.set('Content-Type', 'text/html')   
    let arr = [1, 2, 3];
    res.send(arr);


});

app.get('/object', (req, res, next) => {
    //res.set('Content-Type', 'text/html')   
    let obj = { name: "John" };
    res.send(obj);


});


// app.use('/pdf', (req, res, next) => {
//     res.set('Content-Type', 'application/pdf');
//     res.contentType("application/pdf");
//     let data = fs.readFileSync('lecture.pdf');
//     res.send(data);
//res.sendFile(__dirname + "/lecture.pdf");
// });
//routing
//app.use('/students', studentRouter);


//error handdling
app.use((err, req, res, next) => {
    console.log('There is error', err);
    res.send(err);
});


//bootup
app.listen(3000, () => {
    console.log('Server is started...');
});




// app.use('/image', (req, res, next) => {
//     res.set('Content-Type', 'image/jpeg')
//     let img = fs.readFileSync(__dirname + '/img/dog.jpg');
//     console.log('image');
//     res.send(img);
// });