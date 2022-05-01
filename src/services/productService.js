const Product = require('../models/product');

const createProduct = async (data) => {
    try {
        const newProduct = {
            name: data.name,
            price: data.price,
            category: data.category,
            img: data.img,
            description: data.description
        }
        console.log(data);
        const product = await new Product(newProduct).save();
        return product;
    } catch (err) {
        console.log(err);
    }
}

const deleteProduct = async (id) => {
    try {
        const product = await Product.findOneAndDelete({id: id});
        return product;
    } catch (err) {
        console.log(err);
    }
}

const getAllProducts = async () => {
    try {
        const product = Product.find();
        return product;
    } catch (err) {
        console.log(err);
    }
}

const getProduct = async (id) => {
    try {
        const product = Product.findById(id);
        return product;
    } catch (err) {
        console.log(err);
    }
}

const updateProduct = async (id, data) => {
    try {
        const product = Product.findOneAndUpdate({id: id}, data, {new: true});
        return product;
    } catch (err) {
        console.log(err);
    }
}

const getProductsByCategory = async (data) => {
    try {
        let product;
        if(data.sort) {
            let criteria = (data.sort == 'inc') ? '' : '-';
            product = Product.find({category: data.id}).sort(criteria + 'price');
        } else if (data.filter) {
            if(data.lessThanPrice && data.moreThanPrice) {
                product = Product.find({category: data.id, $lt: data.lessThanPrice, $gt: data.moreThanPrice});
            } else {
                product = Product.find({category: data.id});
            }
        } else {
            product = Product.find({category: data.id});
        }
        return product;
    } catch(err) {
        console.log(err);
    }
}



module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    getProductsByCategory
}