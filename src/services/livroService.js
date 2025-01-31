const Book = require('../models/livroModel');

const bookService = {
    async createBook(data) {
        return await Book.create(data);
    },

    async getAllBooks() {
        return await Book.findAll();
    },

    async getBookById(id) {
        return await Book.findByPk(id);
    },

    async updateBook(id, data) {
        const book = await Book.findByPk(id);
        if (book) {
            return await book.update(data);
        }
        return null;
    },

    async deleteBook(id) {
        const book = await Book.findByPk(id);
        if (book) {
            await book.destroy();
            return true;
        }
        return false;
    },
};

module.exports = bookService;
