// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./styles/'))
});

gulp.task('default', ['styles'], function() {
    gulp.watch('styles/**/*.scss', ['styles']);
});