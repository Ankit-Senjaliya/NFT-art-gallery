"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(user) {
        if (user) {
            this.id = user.id;
        }
    }
    get $id() {
        return this.id;
    }
    set $id(value) {
        this.id = value;
    }
}
exports.User = User;
