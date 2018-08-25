var gulp = require('gulp'),
	gutil = require('gulp-util'),
  runSequence = require('run-sequence'),
  notify = require("gulp-notify"),
  plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify  = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),

	src  = {
	  'scss': 'src/scss/*.scss',
	  'js'  : 'src/js/*.js',
	  'json': 'src/json/*.*',
	  'html': 'src/*.html'
	};

gulp.task('default', function() {
  gulp.watch(src.html, ['html']);
  gulp.watch(src.json, ['json']);
  gulp.watch(src.js, ['js']);
  gulp.watch(src.scss, ['scss']);
});

gulp.task('build', function() {
  runSequence(
    'json',
		'js',
		'scss',
		'html'
	);
})

gulp.task('html', function() {
  gulp.src(src.html)
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'html task complete!' }))
})

gulp.task('scss', function(){
  gulp.src([src.scss])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('src'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Styles task complete!' }))
});

gulp.task('js', function(){
  gulp.src([src.js])
    .pipe(plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(gulp.dest('src'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify('js task complete'))
});

gulp.task('json', function() {
  gulp.src(src.json)
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'json task complete!' }))
})