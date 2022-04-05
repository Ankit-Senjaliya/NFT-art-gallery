"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(status, message, error, body, metaData) {
        this.status = status;
        this.message = message;
        this.error = error;
        this.body = body;
        this.metaData = metaData;
    }
    get $status() {
        return this.status;
    }
    set $status(value) {
        this.status = value;
    }
    get $message() {
        return this.message;
    }
    set $message(value) {
        this.message = value;
    }
    get $error() {
        return this.error;
    }
    set $error(value) {
        this.error = value;
    }
    get $body() {
        return this.body;
    }
    set $body(value) {
        this.body = value;
    }
    get $metaData() {
        return this.metaData;
    }
    set $metaData(value) {
        this.metaData = value;
    }
    static createInstance(responseDto) {
        const response = new Response();
        if (responseDto) {
            response.$status = responseDto.status;
            response.$message = responseDto.message;
            response.$body = responseDto.body;
            response.$error = responseDto.error;
            response.$metaData = responseDto.metaData;
            return response;
        }
        return response;
    }
}
exports.Response = Response;
