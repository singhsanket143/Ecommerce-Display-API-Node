const CategoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.status(200).json({
            message: 'Successfully created the category',
            success: true,
            data: category
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const removeCategory = async (req, res) => {
    try {
        const category = await CategoryService.deleteCategory(req.params.id);
        res.status(200).json({
            message: 'Successfully removed the category',
            success: true,
            data: category
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const updateCategory = async (req, res) => {
    try {
        const category = await CategoryService.updateCategory(req.params.id, req.body);
        res.status(200).json({
            message: 'Successfully updated the category',
            success: true,
            data: category
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const getCategory = async (req, res) => {
    try {
        const category = await CategoryService.getCategory(req.params.id);
        res.status(200).json({
            message: 'Successfully fetched the category',
            success: true,
            data: category
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succcess: false,
            message: 'Something went wrong'
        });
    } 
}

const getAllCategories = async (req, res) => {
    try {
        const category = await CategoryService.getAllCategories();
        res.status(200).json({
            message: 'Successfully fetched all the categories',
            success: true,
            data: category
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
    createCategory,
    removeCategory,
    updateCategory,
    getCategory,
    getAllCategories
}