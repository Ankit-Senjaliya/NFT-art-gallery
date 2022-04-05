"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootService = void 0;
const CommonUtils_1 = require("../utils/CommonUtils");
const InvalidInputError_1 = require("../errors/InvalidInputError");
const Messages_1 = require("../enums/Messages");
const UnauthorizedError_1 = require("../errors/UnauthorizedError");
const logger = require('log4js').getLogger();
logger.level = 'debug';
const userModel = require('../models/UserModel');
class RootService {
    login(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (CommonUtils_1.CommonUtils.isObjectNotNullOrEmpty(req.body) ||
                    !req.body.username ||
                    req.body.password) {
                    throw new InvalidInputError_1.InvalidInputError(Messages_1.Messages.E400);
                }
            }
            catch (error) {
                logger.error(error === null || error === void 0 ? void 0 : error.stack);
                return CommonUtils_1.CommonUtils.prepareErrorResponse(error);
            }
        });
    }
    logout(req) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id))
                    throw new UnauthorizedError_1.UnauthorizedError(Messages_1.Messages.E401);
                yield userModel.update({ token: null }, { where: { id: (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.id } });
            }
            catch (error) {
                logger.error(error === null || error === void 0 ? void 0 : error.stack);
                return CommonUtils_1.CommonUtils.prepareErrorResponse(error);
            }
        });
    }
}
exports.RootService = RootService;
