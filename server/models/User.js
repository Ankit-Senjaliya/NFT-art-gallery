"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeUtils_1 = require("../utils/SequelizeUtils");
const sequelize_1 = require("sequelize");
const User = SequelizeUtils_1.SequelizeUtils.$sequelize.define('User', {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    freezeTableName: true
});
console.log(User === SequelizeUtils_1.SequelizeUtils.$sequelize.models.User);
