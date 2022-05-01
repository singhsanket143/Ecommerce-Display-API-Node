const ProductService = require('../services/productService');

const createProduct = async (req, res) => {
    try {
        const product = await ProductService.createProduct(req.body);
        res.status(200).json({
            message: 'Successfully created the product',
            success: true,
            data: product
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const removeProduct = async (req, res) => {
    try {
        const product = await ProductService.deleteProduct(req.params.id);
        res.status(200).json({
            message: 'Successfully removed the product',
            success: true,
            data: product
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const updateProduct = async (req, res) => {
    try {
        const product = await ProductService.updateProduct(req.params.id, req.body);
        res.status(200).json({
            message: 'Successfully updated the product',
            success: true,
            data: product
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const getProduct = async (req, res) => {
    try {
        const product = await ProductService.getProduct(req.params.id);
        res.status(200).json({
            message: 'Successfully fetched the product',
            success: true,
            data: product
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const getAllProducts = async (req, res) => {
    try {
        const product = await ProductService.getAllProducts();
        res.status(200).json({
            message: 'Successfully fetched all the products',
            success: true,
            data: product
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

module.exports = {
    createProduct,
    removeProduct,
    updateProduct,
    getProduct,
    getAllProducts
}