import Sequelize from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,      //The name of the database
    process.env.DATABASE_USERNAME,  //The MtSql username
    process.env.DATABASE_PASSWORD,  //The MySql Password
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

export default sequelize;