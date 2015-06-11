(function () {
    'use strict';
    var gulp = require('gulp'),
        cover = require('gulp-coverage'),
        exit = require('gulp-exit'),
        mocha = require('gulp-mocha'),
        docjs2md = require('gulp-jsdoc-to-markdown'),
        concat = require('gulp-concat'),
        coveralls = require('gulp-coveralls'),
        fs = require('fs'),
        gutil = require('gulp-util'),
        expect = require('gulp-expect-file'),
        streamProcessors,
        runSequence = require('run-sequence'),
        paths = {
            src: ['./index.js', './statusCodes.js'],
            unit: ['test/**/*.js'],
            lcov: 'reports/coverage.lcov'
        };

    function exitOnError (stream) {
        var errored = false;
        return stream.on('error', function (err) {
            errored = true;
            gutil.log(err.message);
        }).on('end', function () {
            if (errored) {
                process.exit(0);
            }
        })
    }

    gulp.task('exit', function () {
        streamProcessors.push(exit());
    });

    gulp.task('src', function () {
        streamProcessors = [gulp.src(paths.src)];
    });

    gulp.task('lcov', function () {
        streamProcessors = [gulp.src(paths.lcov)];
    });

    gulp.task('expect:lcov', function(){
       streamProcessors.push(expect(paths.lcov))
    });

    gulp.task('unit', function () {
        streamProcessors = [gulp.src(paths.unit)];
    });

    gulp.task('process', function () {
        var stream = streamProcessors.shift();
        return streamProcessors.reduce(function (stream, processor) {
            return stream.pipe(exitOnError(processor));
        }, exitOnError(stream));
    });

    gulp.task('coveralls', function () {
        streamProcessors.push(coveralls());
    });

    gulp.task('mocha', function () {
        streamProcessors.push(mocha());
    })

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
        }));
    })

    gulp.task('format', function () {
        streamProcessors.push(cover.format([
            {reporter: 'html'},
            {reporter: 'lcov'}
        ]));
    });

    gulp.task('report', function () {
        streamProcessors.push(gulp.dest('reports'));
    });

    gulp.task('docjs2md', function () {
        streamProcessors.push(concat("README.md"));
        streamProcessors.push(docjs2md({template: fs.readFileSync("docjs2md/README.hbs", "utf8")}));
        streamProcessors.push(gulp.dest("."));
    })

    /************* TASKS ******************/
    gulp.task('test', ['unit', 'mocha', 'process']);
    gulp.task('cover', ['unit', 'instrument', 'mocha', 'gather', 'format', 'report', 'enforce', 'process'], function () {
        return runSequence(['lcov','expect:lcov','coveralls', 'exit', 'process']);
    });
    gulp.task('doc', ['src', 'docjs2md', 'process']);
    /**************************************/

    gulp.task('default', ['cover'])

}())