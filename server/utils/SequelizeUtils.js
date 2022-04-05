"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeUtils = void 0;
const sequelize_1 = require("sequelize");
const log4js_1 = require("log4js");
const Messages_1 = require("../enums/Messages");
const logger = (0, log4js_1.getLogger)('SequelizeUtils');
logger.level = 'debug';
class SequelizeUtils {
    static sync() {
        SequelizeUtils.sequelize.sync({ alter: true })
            .then(() => {
            logger.info(Messages_1.Messages.DATABASE_SUCCESS);
        })
            .catch((error) => {
            if (error === null || error === void 0 ? void 0 : error.stack) {
                logger.error(error === null || error === void 0 ? void 0 : error.stack);
            }
            else {
                logger.error(Messages_1.Messages.DATABSE_ERROR);
            }
            process.exit(1);
        });
    }
    static get $sequelize() {
        return SequelizeUtils.sequelize;
    }
    static set $sequelize(value) {
        SequelizeUtils.sequelize = value;
    }
}
exports.SequelizeUtils = SequelizeUtils;
SequelizeUtils.sequelize = new sequelize_1.Sequelize(((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.DATABASE) || '', ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.DATABASE_USERNAME) || '', ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c.DATABASE_PASSWORD) || '', {
    host: ((_d = process === null || process === void 0 ? void 0 : process.env) === null || _d === void 0 ? void 0 : _d.DATABASE_HOST) || '',
    dialect: 'mysql',
    pool: {
        max: +(((_e = process === null || process === void 0 ? void 0 : process.env) === null || _e === void 0 ? void 0 : _e.DATABASE_POOL_MAX) || 5),
        min: +(((_f = process === null || process === void 0 ? void 0 : process.env) === null || _f === void 0 ? void 0 : _f.DATABASE_POOL_MIN) || 0),
        acquire: +(((_g = process === null || process === void 0 ? void 0 : process.env) === null || _g === void 0 ? void 0 : _g.DATABASE_POOL_ACQUIRE) || 30000),
        idle: +(((_h = process === null || process === void 0 ? void 0 : process.env) === null || _h === void 0 ? void 0 : _h.DATABASE_POOL_IDLE) || 10000),
    },
    native: true,
    define: {
        charset: 'utf8',
        timestamps: true,
    },
});
