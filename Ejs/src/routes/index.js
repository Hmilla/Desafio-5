const {Router} = require('express')
const router = Router()

const { getProducts, createProduct , getForm} = require('../controllers/productsController');

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/create', getForm);


module.exports = router