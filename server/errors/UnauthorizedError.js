"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
class UnauthorizedError extends Error {
    constructor(message) {
        super();
        this.name = 'UnauthorizedError';
        this.message = message;
    }
}
exports.UnauthorizedError = UnauthorizedError;
