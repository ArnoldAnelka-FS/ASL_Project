const express = require('express')
const router = express.Router()
const imageCtrl = require('../controllers/Images')

const { uploadImage } = require('../middlewares')

router.get('/', imageCtrl.index)
router.get('/new', imageCtrl.form)
router.get('/:id', imageCtrl.show)
router.get('/:id/edit', imageCtrl.form)

// Added our uploadImage middleware to our create route
router.post('/', imageCtrl.create, uploadImage)
// Added our uploadImage middleware to our update route
router.post('/:id', imageCtrl.update, uploadImage)
router.delete('/:id', imageCtrl.remove)
router.get('/:id/delete', imageCtrl.remove)

router.post('/', imageCtrl.create)
router.post('/:id', imageCtrl.update)

router.delete('/:id', imageCtrl.remove)
router.get('/:id/delete', imageCtrl.remove)
router.post('/:id/delete', imageCtrl.remove)



module.exports = router