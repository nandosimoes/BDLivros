const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/livroRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
