/*
var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task ('default', function() {
   console.log('Hooray - You cretaed a gulp task.'); 
});

gulp.task ('html', function() {
   console.log('Imagine something useful being done to your HTML here.');
});
*/

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');


