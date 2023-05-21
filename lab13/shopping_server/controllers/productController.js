const Product = require('../models/product');

exports.save = (req, res, next) => {
    const addedProd = new Product(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
    res.status(201).json(addedProd);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Product.getAll());
}

exports.getByTitle = (req, res, next) => {
    res.status(200).json(Product.getByTitle(req.params.title));
}

exports.deleteById = (req, res, next) => {
    res.json(Product.deleteById(req.params.productId));
}

exports.edit = (req, res) => {
    const editedProd = new Product(req.params.productId, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).edit();
    res.json(editedProd);
}