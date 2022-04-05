"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const rootRouter = require('./RootRouter')(router);
const galleryRouter = require('./GalleryRouter')(router);
const categoriesRouter = require('./CategoriesRouter')(router);
const cartRouter = require('./CartRouter')(router);
const accountRouter = require('./AccountRouter')(router);
const aboutUsRouter = require('./AboutUsRouter')(router);
module.exports = function (app) {
    app.use('', rootRouter);
    app.use('gallery', galleryRouter);
    app.use('gallery/categories', categoriesRouter);
    app.use('cart', cartRouter);
    app.use('account', accountRouter);
    app.use('about-us', aboutUsRouter);
};
