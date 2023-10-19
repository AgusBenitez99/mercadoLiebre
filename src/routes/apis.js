// ************ Require's ************
//apis/products
const router = require('express').Router();


const {list,show,create,update,destroy} = require('../controllers/adminController');


router.get('/', list)

router.get('/:id', show)

router.post('/', create)
 
router.put('/:id', update)


router.delete('/:id', destroy); 


module.exports = router;