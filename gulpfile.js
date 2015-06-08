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
        streamProcessors,
        paths = {
            src: ['./index.js', './statusCodes.js'],
            unit: ['test/**/*.js']
        };

    gulp.task('src', function () {
        streamProcessors = [gulp.src(paths.src)];
    });

    gulp.task('unit', function () {
        streamProcessors = [gulp.src(paths.unit)];
    });

    gulp.task('process', function () {
        var stream = streamProcessors.shift();
        streamProcessors.push(exit());
        return streamProcessors.reduce(function (stream, processor) {
            return stream.pipe(processor);
        }, stream);
    });

    gulp.task('coveralls', function(){
       streamProcessors.push(coveralls());
    });

    gulp.task('mocha', function () {
        streamProcessors.push(mocha()
            //.on('error', function (err) {
            //    gutil.log("mocha failed:", err.message);
            //})
        );
        return streamProcessors;
    })

    gulp.task('instrument', function () {
        return streamProcessors.push(cover.instrument({pattern: paths.src}));
    });


    gulp.task('gather', function () {
        return streamProcessors.push(cover.gather());
    });

    gulp.task('enforce', function () {
        return streamProcessors.push(cover.enforce({
            statements: 80,
            blocks: 80,
            lines: 80,
            uncovered: undefined
        })
            .on('error', function (err) {
                gutil.log("enforce failed:", err.message);
            }));
    })

    gulp.task('format', function () {
        return streamProcessors.push(cover.format());
    });

    gulp.task('report', function () {
        return streamProcessors.push(gulp.dest('reports'));
    });

    gulp.task('docjs2md', function () {
        streamProcessors.push(concat("README.md"));
        streamProcessors.push(docjs2md({template: fs.readFileSync("docjs2md/README.hbs", "utf8")})
                .on('error', function (err) {
                    gutil.log("jsdoc2md failed:", err.message);
                })
        );
        streamProcessors.push(gulp.dest("."));
    })

    /************* TASKS ******************/
    gulp.task('test', ['unit', 'mocha', 'process']);
    gulp.task('cover', ['unit', 'instrument', 'mocha', 'gather', 'format', 'report', 'enforce', 'coveralls' ,'process']);
    gulp.task('doc', ['src', 'docjs2md', 'process']);
    /**************************************/

    gulp.task('default', ['cover'])

}())