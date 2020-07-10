const express = require('express');
const contactUsController = require('../controllers/ContactUsController');

const router = express.Router();



router.get('/', contactUsController.getContactUsData);
router.get('/:id', contactUsController.getContactUsDataById);
router.post('/', contactUsController.storeContactUsData);

module.exports = router;