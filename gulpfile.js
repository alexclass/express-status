/**
 * Created by jhorlin.dearmas on 6/4/2015.
 */
(function () {
    'use strict';
    var gulp = require('gulp'),
        path = require('path'),
        nock = require('nock'),
        runSequence = require('run-sequence').use(gulp),
        coveralls = require('gulp-coveralls'),
        cover = require('gulp-coverage'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        jsinspect = require('gulp-jsinspect'),
        nsp = require('gulp-nsp'),
        jscs = require('gulp-jscs'),
        docjs2md = require('gulp-jsdoc-to-markdown'),
        fs = require('fs'),
        mocha = require('gulp-mocha'),
        buddy = require('gulp-buddy.js'),
        concat = require('gulp-concat'),
        expect = require('gulp-expect-file'),
        paths = {
            src: ['lib/**/*.js', 'index.js'],
            unit: 'test/**/*.js',
            lcov: 'reports/coverage.lcov'
        },
        streamProcessors;

    gulp.task('process', function (done) {
        var stream = streamProcessors.shift();
        return streamProcessors.reduce(function (stream, processor) {
            return stream.pipe(processor
                    .on('error', function (err) {
                        done(err);
                    })
            )
        }, stream)

    });

    gulp.task('unit', function () {
        streamProcessors = [gulp.src(paths.unit)]
    })

    gulp.task('src', function () {
        streamProcessors = [gulp.src(paths.src)]
    })

    gulp.task('mocha', function () {
        streamProcessors.push(mocha());
    })

    gulp.task('jsinspect', function () {
        streamProcessors.push(jsinspect());
    });

    gulp.task('buddy', function () {
        streamProcessors.push(buddy())
    });

    gulp.task('jshint', function () {
        streamProcessors.push(jshint());
        streamProcessors.push(jshint.reporter(stylish));
    });

    gulp.task('instrument', function () {
        streamProcessors.push(cover.instrument({pattern: paths.src}));
    });

    gulp.task('gather', function () {
        streamProcessors.push(cover.gather());
    });

    gulp.task('enforce', function () {
        streamProcessors.push(cover.enforce({
                statements: 80,
                blocks: 80,
                lines: 80,
                uncovered: undefined
            })
        )
    });

    gulp.task('format', function () {
        streamProcessors.push(cover.format());
    });

    gulp.task('report', function () {
        streamProcessors.push(cover.format([
            {reporter: 'html'},
            {reporter: 'lcov'}
        ]));
    });

    gulp.task('coveralls', function () {
        streamProcessors.push(coveralls());
    });

    gulp.task('inspect', ['src', 'jsInspect', 'process']);

    gulp.task('nsp', function (done) {
        nsp({
            path: './package.json'
        }, done);
    });

    gulp.task('jscs', function () {
        streamProcessors.push(jscs());
    });

    gulp.task('lcov', function () {
        streamProcessors = [gulp.src(paths.lcov)];
        // coveralls doesn't check that the file exists so we want to check that it does
        streamProcessors.push(expect(paths.lcov));
    });

    gulp.task('docjs2md', function () {
        streamProcessors.push(concat("README.md"));
        streamProcessors.push(docjs2md({template: fs.readFileSync("docjs2md/README.hbs", "utf8")}));
        streamProcessors.push(gulp.dest("."));
    })

    gulp.task('track', ['lcov', 'coveralls', 'process'])

    /** tasks **/

    gulp.task('test', ['unit', 'mocha', 'process'])

    gulp.task('quality', ['src', 'buddy', 'jsinspect', 'process'])

    gulp.task('secure', ['nsp']);

    gulp.task('doc', ['src', 'docjs2md', 'process'])

    gulp.task('style', ['src', 'jshint', 'jscs', 'process']);

    gulp.task('cover', ['unit', 'instrument', 'mocha', 'gather', 'enforce', 'format', 'report', 'process']);

    /**********/

    gulp.task('default', ['cover', 'quality', 'secure', 'style'], function () {
        return runSequence(['track']);
    })

}())