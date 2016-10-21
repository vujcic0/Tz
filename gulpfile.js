var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    sourceMap = require('gulp-sourcemaps');

gulp.task('sass', function() {
    gulp.src(['resources/sass/*.sass'])
    .pipe(sourceMap.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 30 versions']}))
    .pipe(sass({outputStyle: 'compressed'}))
    //.pipe(sourceMap.write('.'))
    .pipe(gulp.dest('public/css/'))
    .pipe(browserSync.stream());
});

// Scripts Tasks
gulp.task('scripts', function() {
    gulp.src([        
        'resources/js/global.js',
        
    ])
    .pipe(plumber())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'))
    .pipe(browserSync.stream());
});

// Image Task
// Compress
gulp.task('images', function() {
    return gulp.src('resources/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/img/'));
});

gulp.task('watch', function() {
    gulp.watch('resources/sass/**', ['sass']);
    gulp.watch('resources/js/*', ['scripts']);
});

gulp.task('default', ['watch']);
