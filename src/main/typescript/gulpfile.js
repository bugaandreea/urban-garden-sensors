const gulp = require('gulp');
const del = require('del');

gulp.task('clean', gulp.series(function(){
    return del(['../resources/static/**/*', '../../../bin/static/**/*'], {force: true});
}));

gulp.task('copy', gulp.series('clean', function(){
    return gulp.src('./dist/**/*', {base: './dist'})
    .pipe(gulp.dest('../resources/static'))
    .pipe(gulp.dest('../../../bin/static'))
}));

gulp.task('default', gulp.series('copy'));