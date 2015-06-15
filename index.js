/**
 * Exports an object with status codes and extends the express request object by adding a method that will set the status code and return the request object.
 * @module express-status
 * @example
 * ```javascript
 * var statusCodes = require()
 * ```
 */

(function (module) {
    'use strict';

    var express,
        responsePrototype,
        statusCodes = require('./statusCodes.js');
    try {
        express = require('express');
        responsePrototype = express.response;
    } catch (e) {
        throw new Error('express-status required express: please npm install express. ' + e.message);
    }

    Object.keys(statusCodes).forEach(function (status) {
        Object.defineProperty(module.exports, status, {
            value: statusCodes[status].code
        });

        responsePrototype[status] = function () {
            return this.status(statusCodes[status].code);
        };

    });

}(module));
