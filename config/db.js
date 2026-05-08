import { Sequelize } from 'sequelize'

dotenv.config(); 

const sequelize = new Sequelize(postgres://postgres:123456@localhost:5432/user, {
    dialect: 'postgres',
    logging: false,
});


sequelize.authenticate()
    .then(() => console.log("🔗 Conexão com o banco de dados estabelecida"))
    .catch(err => console.error("❌ Erro ao conectar no banco:", err));

export default sequelize
