"use strict";
var _a, _b;
const express = require('express');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();
const routers = require('./routers/index');
const { SequelizeUtils } = require('./utils/SequelizeUtils');
SequelizeUtils.sync();
const app = express();
const version = (_a = JSON.parse(fs.readFileSync('./package.json'))) === null || _a === void 0 ? void 0 : _a.version;
app.use(express.json({ limit: ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.JSON_BODY_LIMIT) || '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');
routers(app);
http.createServer(app).listen(process.env.PORT || 8080, function () {
    var _a;
    console.log(`NFT-ART GALLERY v${version} Server is running on ` +
        `${((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT) || 8080}`);
});
