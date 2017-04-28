//add gulp and all used modules

var gulp = require('gulp'),
	scss = require('gulp-scss'),
	browserSync = require('browser-sync');

//create task for sass preprocessor (using scss)
gulp.task('scss', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(scss())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

//create task for synchronization with browser
gulp.task('browser-sync', function() { 
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

//create task for scss watching
//it's convenient when we need to process styles in realtime
gulp.task('watch', ['browser-sync', 'scss'], function() {
    gulp.watch('app/scss/**/*.scss', ['scss']);
});