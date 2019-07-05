var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('server', ['styles'], function() {
	
	browserSync.init({
		server: { baseDir: './app/'}
	});

	// watch('./app/**/*.html', browserSync.stream());
	// watch('./app/**/*.js', browserSync.reload());
	// watch('./app/img/*.*', browserSync.reload());


    watch(['./app/**/*.html', './app/**/*.js', './app/img/*.*']).on('change', browserSync.reload);


	watch('./app/less/**/*.less', function(){
		gulp.start('styles');
	});

});

gulp.task('styles', function() {
	return gulp.src('./app/less/main.less')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Styles',
				sound: false,
				message: err.message
			}
		})
	}))
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['server']);
