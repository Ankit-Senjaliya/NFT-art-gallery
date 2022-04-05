"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtils = void 0;
const Response_1 = require("../dto/Response");
class CommonUtils {
    static isObjectNullOrEmpty(obj) {
        return !obj || Object.keys(obj).length === 0;
    }
    static isObjectNotNullOrEmpty(obj) {
        return obj && Object.keys(obj).length > 0;
    }
    static isArrayNullOrEmpty(arr) {
        return !arr || arr.length === 0;
    }
    static isArrayNotNullOrEmpty(arr) {
        return arr && arr.length > 0;
    }
    static prepareErrorResponse(error) {
        switch (error === null || error === void 0 ? void 0 : error.name) {
            case 'InvalidInputError': {
                return new Response_1.Response(400, error === null || error === void 0 ? void 0 : error.message);
            }
            case 'UnauthorizedError': {
                return new Response_1.Response(401, error === null || error === void 0 ? void 0 : error.message);
            }
            case 'UnknownError':
            default: {
                return new Response_1.Response(500, error === null || error === void 0 ? void 0 : error.message);
            }
        }
    }
}
exports.CommonUtils = CommonUtils;
