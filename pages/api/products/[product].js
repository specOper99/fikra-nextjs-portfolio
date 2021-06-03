const products = [
    {
        id: "pr1",
        name: "Product name #1",
        description: "This is a description for the product num 1"
    },
    {
        id: "pr2",
        name: "Product name #2",
        description: "This is a description for the product num 2"
    },
    {
        id: "pr3",
        name: "Product name #3",
        description: "This is a description for the product num 3"
    },
    {
        id: "pr4",
        name: "Product name #4",
        description: "This is a description for the product num 4"
    },
    {
        id: "pr5",
        name: "Product name #5",
        description: "This is a description for the product num 5"
    },
]

export default (req, res) => {
    // index = +req.url.substring(req.url.lastIndexOf('/')+1)-1
    res.json(products.find(product => req.query.product === product.id) || "No product with this id");
}