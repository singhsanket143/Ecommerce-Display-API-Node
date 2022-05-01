const Category = require('../models/category');

const createCategory = async (data) => {
    try {
        const newCategory = {
            name: data.name,
            id: data.id
        }
        const category = await new Category(newCategory).save();
        return category;
    } catch (err) {
        console.log(err);
    }
}

const deleteCategory = async (id) => {
    try {
        const cateogry = await Category.findByOneAndDelete({id: id});
        return cateogry;
    } catch (err) {
        console.log(err);
    }
}

const getAllCategories = async () => {
    try {
        const category = Category.find();
        return category;
    } catch (err) {
        console.log(err);
    }
}

const getCategory = async (id) => {
    try {
        const category = Category.findById(id);
        return category;
    } catch (err) {
        console.log(err);
    }
}

const updateCategory = async (id, data) => {
    try {
        const category = Category.findOneAndUpdate({id: id}, data, {new: true});
        return category;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategory,
    updateCategory
}