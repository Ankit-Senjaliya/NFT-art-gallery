"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidInputError = void 0;
class InvalidInputError extends Error {
    constructor(message) {
        super();
        this.name = 'InvalidInputError';
        this.message = message;
    }
}
exports.InvalidInputError = InvalidInputError;
