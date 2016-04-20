/*!
* @(#)gulpfile.js
* @author: Diego Guevara - github.com/diegoguevara
* Created: 2016.04
*/

var gulp       = require( 'gulp' );
var ngAnnotate = require( 'gulp-ng-annotate' );
var uglify     = require( 'gulp-uglify' );
var rename     = require( 'gulp-rename' );

/**
 * Ejecuta la construccion del modulo
 * @task build
 */
gulp.task( 'build', function() {
  return gulp.src('src/*.js')
  	.pipe( ngAnnotate() )
    .pipe( uglify({preserveComments : 'license', mangle: false}) )
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe( gulp.dest( './' ) );
});


/**
 * Tarea por defecto, ejecuta la construccion de todos los modulos 
 * @task default
 */
gulp.task('default', function() {
    gulp.start(['build']);
    return;
});