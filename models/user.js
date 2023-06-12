import sequelize, { Sequelize } from "sequelize";
import database from './database.js';

const User = database.define("users", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

export default User;