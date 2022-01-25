const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zip', function () {
    return gulp.src(['./**/app/**/*', '!./**/app/**/*.test.js', '!./**/coverage/**/*', './server.js', './package.json', './package-lock.json'])
        .pipe(zip('pbauthentication.zip'))
        .pipe(gulp.dest('./'));
});