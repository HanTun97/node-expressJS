const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'assets', 'views', 'users.html'));
});



router.post('/', express.urlencoded({ extended: true }), (req, res, next) => {
    res.write('Users:');
    try{
        res.write('\n Name: ' + req.body.name);
        res.write('\n Website: ' + req.body.website);
        res.write('\n Password: ' + req.body.pwd);
        res.write('\n Checked: ' + req.body.checkbox);
        res.end();
    }catch{
        throw new Error('Error in product add');
    }
});


module.exports = router;