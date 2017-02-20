var gulp = require('gulp');
var gh-pages = require('gulp-gh-pages');

gulp.task('default', function() {

});

gulp.task('deploy', function() {
  return gulp.src('./_book/**/*').pipe(gh-pages());
});
