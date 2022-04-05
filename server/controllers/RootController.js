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
exports.RootController = void 0;
const log4js_1 = require("log4js");
const RootService_1 = require("../services/RootService");
const CommonUtils_1 = require("../utils/CommonUtils");
const logger = (0, log4js_1.getLogger)('RootController');
logger.level = 'debug';
class RootController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield new RootService_1.RootService().login(req);
                res.status(response.$status || 200).send(response);
            }
            catch (error) {
                const response = CommonUtils_1.CommonUtils.prepareErrorResponse(error);
                logger.error(error === null || error === void 0 ? void 0 : error.stack);
                res.status(response.$status || 500).send(response);
            }
        });
    }
    static logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield new RootService_1.RootService().logout(req);
                res.status(response.$status || 200).send(response);
            }
            catch (error) {
                const response = CommonUtils_1.CommonUtils.prepareErrorResponse(error);
                logger.error(error === null || error === void 0 ? void 0 : error.stack);
                res.status(response.$status || 500).send(response);
            }
        });
    }
}
exports.RootController = RootController;
