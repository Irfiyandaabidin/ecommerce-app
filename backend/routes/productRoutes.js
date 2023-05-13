const router = require('express').Router();
const Product = require('../models/Product');
const { findById } = require('../models/User');
const User = require('../models/User');

// get product
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (err) {
        res.status(400).send(err.message);
    }
})

// create product
router.post('/', async (req, res) => {
    try {
        const { name, description, price, category, images: pictures } = req.body
        const product = await Product.create({ name, description, price, category, pictures })
        const products = await Product.find()
        res.status(201).json(products)
    } catch (err) {
        res.status(400).send(err.message);
    }
})

// update product
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { name, description, price, category, images: pictures } = req.body;
        const product = await Product.findByIdAndUpdate(id, {name, description, price, category, pictures });
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).send(err.message);
    }
})

// delete product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.body;
    try {
        const user = await User.findById(user_id);
        if(!user.isAdmin)res.status(401).json("You don't have permission");
        await Product.findByIdAndDelete(id);
        const products = await Product.find()
        res.status(200).json(products);
    } catch (err) {
        res.status(400).send(err.message);
    }
})

// get user by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(400).send(err.message);
    }
})

module.exports = router;