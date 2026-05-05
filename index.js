import app from './app.js'
import sequelize from './config/db.js'

const PORT = 3000

try {
    await sequelize.authenticate()
    console.log('Banco conectado')
    await sequelize.sync()
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    })
} catch (error) {
    console.log('Erro ao iniciar servidor', error);
} 