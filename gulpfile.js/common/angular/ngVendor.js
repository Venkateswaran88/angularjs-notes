const { series, src, task, dest } = require('gulp');
const concat = require('gulp-concat');
const { paths } = require('../../paths');

task('ngVendor', () => {
    return src([
        './node_modules/angular/angular.min.js',
        './node_modules/angular-route/angular-route.min.js',
        './node_modules/angular-cookies/angular-cookies.min.js'
    ])
        .pipe(concat('ng-vendor.min.js')) // combine js file(s) into one
        .pipe(dest(paths.dest)) // save combined js file
});