"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeUtils_1 = require("../utils/SequelizeUtils");
const sequelize_1 = require("sequelize");
const bcrypt_1 = require("bcrypt");
module.exports = SequelizeUtils_1.SequelizeUtils.$sequelize.define('user', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 25],
            notNull: true,
            notEmpty: true,
        },
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 25],
            notNull: true,
            notEmpty: true,
        },
    },
    full_name: {
        type: sequelize_1.DataTypes.VIRTUAL,
        get() {
            return (this.getDataValue('first_name') + ' ' +
                this.getDataValue('last_name'));
        },
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [2, 50],
            notNull: true,
            notEmpty: true,
        },
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notNull: true,
            notEmpty: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$',
            len: [8, 20],
        },
        set(value) {
            this.setDataValue('password', (0, bcrypt_1.hashSync)(value, 10));
        },
    },
    email_verified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    phone_number: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: true,
        validate: {
            isDecimal: true,
            is: '^\d{10}$',
            len: [10, 10],
        },
    },
    phone_verified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    token: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: true,
        },
    },
    role: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
        },
    },
    last_ip: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isIP: true,
            notEmpty: true,
        },
    },
    last_login: {
        type: sequelize_1.DataTypes.DATE,
        validate: {
            isDate: true,
        },
    },
    last_password_reset: {
        type: sequelize_1.DataTypes.DATE,
        validate: {
            isDate: true,
        },
    },
    logins_count: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            isInt: true,
        },
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: true,
        },
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    updatedAt: 'updateTimestamp',
    deletedAt: 'destroyTime',
    paranoid: true,
    engine: 'MYISAM',
});
