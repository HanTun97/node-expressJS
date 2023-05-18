const express = require('express');
const router = express.Router();

router.get('/api', express.json(), (req, res) => {
    console.log(req.query);
    res.write('recevied query string: \n bookName is ' + req.query.name);
    res.write("\n isbn is " + req.query.ISBN)
    res.end();
});


module.exports = router;