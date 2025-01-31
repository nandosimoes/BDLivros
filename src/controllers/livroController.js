const bookService = require('../services/livroService');

const bookController = {
    createBook: async (req, res) => {
        const { title, author, year, genre, rating, cover } = req.body;

        const missingFields = [];
        if (!title) missingFields.push('Title');
        if (!author) missingFields.push('Author');
        if (!year) missingFields.push('year');
        if (!genre) missingFields.push('Gender');
        if (rating === undefined) missingFields.push('Rating');

        if (missingFields.length > 0) {
            return res.status(400).json({ message: `Campos obrigatórios faltando: ${missingFields.join(', ')}` });
        }

        if (year && (typeof year !== 'number' || year < 0)) {
            return res.status(400).json({ message: 'O ano deve ser um número não negativo.' });
        }

        if (rating !== undefined && (typeof rating !== 'number' || rating < 0 || rating > 10)) {
            return res.status(400).json({ message: 'A nota deve ser um número entre 0 e 10.' });
        }

        if (cover && !/^https?:\/\/[^\s]+$/.test(cover)) {
            return res.status(400).json({ message: 'URL da capa inválida.' });
        }

        try {
            const book = await bookService.createBook(req.body);
            res.status(200).json({ message: 'Livro criado com sucesso!', book });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar livro. Campos insuficientes ou inválidos.', error });
        }
    },

    getAllBooks: async (req, res) => {
        try {
            const books = await bookService.getAllBooks();
            if (books.length === 0) {
                return res.status(404).json({ message: 'Nenhum livro cadastrado.' });
            }
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar livros.', error });
        }
    },

    getBookById: async (req, res) => {
        try {
            const book = await bookService.getBookById(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }
            res.json(book);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar livro.', error });
        }
    },

    updateBook: async (req, res) => {
        const { title, author, rating, cover, year, genre } = req.body;

        if (title === undefined && author === undefined && rating === undefined && cover === undefined && year === undefined && genre === undefined) {
            return res.status(400).json({ message: 'Informe pelo menos um campo para atualizar.' });
        }

        if (year !== undefined && (typeof year !== 'number' || year < 0)) {
            return res.status(400).json({ message: 'O ano deve ser um número não negativo.' });
        }

        if (rating !== undefined && (typeof rating !== 'number' || rating < 0 || rating > 10)) {
            return res.status(400).json({ message: 'A nota deve ser um número entre 0 e 10.' });
        }

        if (cover && !/^https?:\/\/[^\s]+$/.test(cover)) {
            return res.status(400).json({ message: 'URL da capa inválida.' });
        }

        try {
            const book = await bookService.updateBook(req.params.id, req.body);
            if (!book) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }
            res.json({ message: 'Livro atualizado com sucesso!', book });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar livro.', error });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const success = await bookService.deleteBook(req.params.id);
            if (!success) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }
            res.status(200).json({ message: 'Livro deletado com sucesso.' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar livro.', error });
        }
    },
};

module.exports = bookController;
