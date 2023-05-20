const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'assets', 'views', 'products.html'));
});

router.post('/', express.urlencoded({ extended: true }), (req, res, next) => {
    try{
        res.write('Product:');
        res.write('\n Product Number: ' + req.body.productNum);
        res.write('\n Product Name: ' + req.body.name);
        res.write('\n Quantity In Stock: ' + req.body.quantityStock);
        res.write('\n Supplier: ' + req.body.supplier);
        res.write('\n Unit Price: ' + req.body.unitPrice);
        res.write('\n Date Supplied: ' + req.body.suppliedDate);
        res.end();
    }catch{
            throw new Error('Error in product add');
        }
});


module.exports = router;