/**
 * Created by jhorlin.dearmas on 6/8/2015.
 */
(function () {
    'use strict';
    describe('test express response objects are extended with the status code', function () {
        var codes = require('../index'),
            supertest = require('supertest'),
            statusCodes = require('../statusCodes'),
            express = require('express'),
            request,
            app;

        beforeEach(function () {
            app = express()
            request = supertest(app);
        })

        afterEach(function(done){
           return request.destroy(done);
        })

        Object.keys(statusCodes).forEach(function (status) {
            it("should respond with a status code of " + statusCodes[status].code + ' when response property ' + status + ' is called', function (done) {
                app.get('/', function (req, res) {
                    res[status]().send(statusCodes[status].message);
                })

                return request.get('/')
                    .redirects(0)
                    .expect(codes[status])
                    .end(done)
            })
        });
    })
}())