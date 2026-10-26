
const products = [
    {
        id: 1,
        name: "Mechanical Keyboard",
        price: 2499,
        category: "Accessories",
        inStock: true
    },
    {
        id: 2,
        name: "Wireless Mouse",
        price: 999,
        category: "Accessories",
        inStock: true
    },
    {
        id: 3,
        name: "USB-C Hub",
        price: 1799,
        category: "Electronics",
        inStock: false
    }
];

export function getAllProducts() {
    return products;
}

export function getProductById(id) {
    return products.find((product) => product.id === Number(id));
}
