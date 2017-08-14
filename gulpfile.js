var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'), 
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create();

gulp.task ('default', function() {
   console.log('Hooray - You cretaed a gulp task.'); 
});

gulp.task ('html', function() {
   console.log('Imagine something useful being done to your HTML here.');
});

/*gulp.task ('styles', function() {
   console.log('Imagine Sass or PostCSS tasks running here.'); 
});*/
gulp.task ('styles', function() {
   return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
       .pipe(gulp.dest('./app/temp/styles')); 
});



gulp.task('watch', function() {
    
    browserSync.init({
        notify: false,
       server: { 
           baseDir: "app"
       } 
    });
    
    watch('./app/index.html', function() {
        //  gulp.start('html');
        browserSync.reload();
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        // gulp.start('styles');
        gulp.start('cssInject');
    });
    
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});