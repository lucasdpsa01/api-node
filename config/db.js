import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';

dotenv.config(); 

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});


sequelize.authenticate()
    .then(() => console.log("🔗 Conexão com o banco de dados estabelecida"))
    .catch(err => console.error("❌ Erro ao conectar no banco:", err));

export default sequelize