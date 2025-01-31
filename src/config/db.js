const { Sequelize } = require('sequelize');
require('dotenv').config();

// Conexão com o banco de dados usando Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// Sincroniza o banco de dados, criando a tabela "books" caso não exista
sequelize.sync()
    .then(() => {
        console.log('Tables criadas com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao criar a table', error);
    });

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

// Testa a conexão ao iniciar o servidor
testConnection();

module.exports = sequelize;
