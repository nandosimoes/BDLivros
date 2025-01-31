const express = require('express');
const bookController = require('../controllers/livroController');

const router = express.Router();

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
