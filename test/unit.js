/**
 * Created by jhorlin.dearmas on 6/8/2015.
 */
(function () {
    'use strict';
    describe('test express response objects are extended with the status code', function () {
        var codes = require('../index'),
            chai = require('chai'),
            chaiHttp = require('chai-http'),
            Promise = require('bluebird'),
            expect = chai.expect,
            statusCodes = require('../statusCodes'),
            express = require('express'),
            request,
            app;

        chai.use(chaiHttp);
        chai.request.addPromises(Promise);

        beforeEach(function () {
            app = express()
            request = chai.request(app);
        })

        Object.keys(statusCodes).forEach(function (status) {
            it("should respond with a status code of " + statusCodes[status].code + ' when response property ' + status + 'is called', function () {
                app.get('/', function (req, res) {
                    res[status]().send(statusCodes[status].message);
                })

                return request.get('/')
                    .then(function (res) {
                        expect(res).to.have.status(codes[status])
                    })
            })
        });
    })
}())