const products = []

const getProducts = (req, res)=>{
    res.status(200).render('products', {products});
}
const createProduct = (req, res)=>{
    const {title, price, thumbnail} = req.body
    const producto = {title,price,thumbnail}
    console.log(req.body)
    if(products.length){
        const id = products[products.length - 1].id + 1
        producto.id = id
    }else{
        producto.id = 1
    }
    products.push(producto)
    res.status(201).redirect('/productos/create');
}
const getForm = (req, res)=>{
    res.status(200).render('formProduct');
}

module.exports = {
    getProducts,
    createProduct,
    getForm
}