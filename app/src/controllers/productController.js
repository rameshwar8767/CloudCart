
import {
    getAllProducts,
    getProductById
} from "../services/productService.js";

export function listProducts(req, res) {
    res.status(200).json({
        success: true,
        count: getAllProducts().length,
        data: getAllProducts()
    });
}

export function getProduct(req, res) {
    const product = getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({
        success: false,
        message: "Product not found"
        });
    }

    return res.status(200).json({
        success: true,
        data: product
    });
}
