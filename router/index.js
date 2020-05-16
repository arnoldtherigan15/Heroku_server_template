const router = require('express').Router()
const ImageController = require('../controllers/ImageController')
const multer  = require('multer')
const upload = multer({})

router.post('/api/upload', upload.single('url') ,ImageController.uploadImage)


module.exports = router