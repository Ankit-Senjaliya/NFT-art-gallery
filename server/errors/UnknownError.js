"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownError = void 0;
class UnknownError extends Error {
    constructor(message) {
        super();
        this.name = 'UnknownError';
        this.message = message;
    }
}
exports.UnknownError = UnknownError;
