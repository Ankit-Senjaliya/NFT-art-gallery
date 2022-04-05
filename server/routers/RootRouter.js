"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootController_1 = require("../controllers/RootController");
const AuthUtils_1 = require("../utils/AuthUtils");
module.exports = function (router) {
    router.post('/login', RootController_1.RootController.login);
    router.get('/logout', AuthUtils_1.AuthUtils.verifyToken, RootController_1.RootController.logout);
    return router;
};
