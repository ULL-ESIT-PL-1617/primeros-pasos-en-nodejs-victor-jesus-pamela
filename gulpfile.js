var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('default', function() {

});

gulp.task('deploy', function() {
  return gulp.src('./gh-pages/**/*').pipe(ghPages());
});
