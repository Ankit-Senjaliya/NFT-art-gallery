"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (router) {
    router.route('/profile').get().post();
    router.get('/order-history');
    router.get('/');
    return router;
};
