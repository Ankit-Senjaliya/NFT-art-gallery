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
exports.AuthUtils = void 0;
const User_1 = require("../dto/User");
const Messages_1 = require("../enums/Messages");
const UnauthorizedError_1 = require("../errors/UnauthorizedError");
const CommonUtils_1 = require("./CommonUtils");
const jwt = require('jsonwebtoken');
class AuthUtils {
    static generateToken(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        });
    }
    static verifyToken(req, res, next) {
        var _a, _b;
        try {
            const token = ((_a = req === null || req === void 0 ? void 0 : req.cookies) === null || _a === void 0 ? void 0 : _a.token) ||
                ((_b = req.headers['authorization']) === null || _b === void 0 ? void 0 : _b.split('Bearer ')[1]);
            if (!token) {
                throw new UnauthorizedError_1.UnauthorizedError(Messages_1.Messages.E401);
            }
            const user = new User_1.User(jwt.verify(token, process.env.JWT_SECRET));
            req.user = user;
        }
        catch (error) {
            const response = CommonUtils_1.CommonUtils.prepareErrorResponse(error);
            let status = 403;
            if (response.$error === 401) {
                status = response.$error;
            }
            return res.status(status).send(response);
        }
        return next();
    }
}
exports.AuthUtils = AuthUtils;
