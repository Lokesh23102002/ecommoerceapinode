const productService = require("../services/product.service.js");

const createProduct = async (req, res) => {
    try {
        
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message:"problem in controller product in create product"
        })
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "problem in controller product"
        })
    }
}

const updateProduct = async (req, res) => {
    const productId=req.params.id;
    try {
        const product = await productService.updateProduct(productId,req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "problem in controller product"
        })
    }
}



const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "problem in controller product"
        })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({
            error: error.message,
            message: "problem in controller product"
        })
        
    }
}


const createMultipleProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.createMultipleProduct(req.body);
        return res.status(201).send({message:"products Created Successfully"});
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "problem in controller product"
        })
    }
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    createMultipleProduct,
    findProductById,
}