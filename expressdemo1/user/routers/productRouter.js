const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    throw new Error('Error in product add');
    // res.sendFile(path.join(__dirname, '..', '..', 'public', 'assets', 'views', 'index.html'));
});

router.post('/', express.urlencoded({ extended: true }), (req, res, next) => {
    console.log(req.body);
    res.write('Thank you.' + ' In request body,');
    res.write('\n username: ' + req.body.username);
    res.write('\n password: ' + req.body.password);
    res.end();
});


module.exports = router;