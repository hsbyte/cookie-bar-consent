var gulp = require('gulp'),
  notify = require("gulp-notify"),
  plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify  = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),

	src  = {
	  'styles'  : 'src/styles/_*/*.scss',
	  'scripts' : 'src/scripts/js/*.js',
	  'json'    : 'src/json',
	},

	dist = {
	  'styles'  : 'dist/styles',
	  'scripts' : 'dist/scripts',
    'json'    : 'dist/json'
	};

gulp.task('default', function() {
  gulp.watch(src.scripts, ['scripts']);
  gulp.watch(src.styles, ['styles']);
  gulp.watch(dist.json, ['json']);
  gulp.watch('dist/', ['root']);
});

gulp.task('root', function() {
  gulp.src('*.html')
    .pipe(gulp.dest('dist/'));
})

gulp.task('styles', function(){
  gulp.src([src.styles])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest(src.styles))
    .pipe(minifycss())
    .pipe(gulp.dest(dist.styles))
    .pipe(notify({ message: 'Styles task complete!' }))
});

gulp.task('scripts', function(){
  gulp.src([src.scripts])
    .pipe(plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(gulp.dest('src/scripts'))
    .pipe(uglify())
    .pipe(gulp.dest(dist.scripts))
    .pipe(notify('Scripts task complete'))
});

gulp.task('json', function() {
  gulp.src(src.json)
    .pipe(gulp.dest(dist.json));
})