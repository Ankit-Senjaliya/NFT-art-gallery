"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (router) {
    router.route('/faq').get().post();
    router.get('/privacy-policy');
    router.get('/terms-and-conditions');
    return router;
};
