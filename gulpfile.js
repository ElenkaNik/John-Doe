let gulp = require('gulp'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat');

gulp.task('minify', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('concat', function() {
    return gulp.src('*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('copy', function() {
    return gulp.src('img/*.*')
        .pipe(gulp.dest('build/img'));
});

gulp.task('default', gulp.parallel('minify', 'concat', 'copy'));


gulp.task('watch', function(){
    gulp.watch(['js/*.js'], gulp.series('minify'));
    gulp.watch(['*.css'], gulp.series('concat'));
    gulp.watch(['img/*.*'], gulp.series('copy'));

});

