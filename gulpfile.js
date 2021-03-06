'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith  = require('gulp.spritesmith'),
    shorthand = require('gulp-shorthand'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    rigger = require('gulp-rigger'),
    fileinclude = require('gulp-file-include'),
    rename = require("gulp-rename"),
    cleanCSS = require('gulp-clean-css'),
    reload = browserSync.reload;
    
var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        sprite: 'src/scss/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        style: 'src/scss/**/*.*',
        img: 'src/img/**/*.*',
        sprite: 'src/img/sprite/*.*',
        spriteBig: 'src/img/sprite-big/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/scss/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
//        .pipe(rigger())
        .pipe(fileinclude())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(rigger()) 
        .pipe(sourcemaps.init()) 
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) 
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
//        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('css-prod', () =>
    gulp.src('src/scss/common.scss')
        .pipe(sass({
            sourceMap: false,
            errLogToConsole: true
        }))
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(rename("common.min.css"))
        .pipe(gulp.dest(path.build.css))
);

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('sprite:build', function() {
  var spriteData =
    gulp.src(path.src.sprite)
      .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 5
      }));

  spriteData.img.pipe(gulp.dest(path.build.img));
  spriteData.css.pipe(gulp.dest(path.build.sprite));
});

gulp.task('sprite-big:build', function() {
  var spriteData =
    gulp.src(path.src.spriteBig)
      .pipe(spritesmith({
        imgName: 'sprite-big.png',
        cssName: '_sprite-big.scss',
        padding: 5
      }));

  spriteData.img.pipe(gulp.dest(path.build.img));
  spriteData.css.pipe(gulp.dest(path.build.sprite));
});
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'sprite:build',
    'style:build',
    'fonts:build',
    'image:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'watch']);
//gulp.task('default', ['build', 'webserver', 'watch']);

function onError(err) {
  console.log(err);
  this.emit('end');
}