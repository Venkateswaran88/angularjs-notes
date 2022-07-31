const { parallel, dest, src, task, series } = require('gulp');
const concat = require('gulp-concat');
const { paths } = require('../paths');

task('bootstrapJs', () => {
    return src([
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ])
    .pipe(concat('bootstrap.bundle.min.js'))
    .pipe(dest(paths.dest));
});

task('bootstrapCss', () => {
    return src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(dest(paths.dest + '/bootstrap/css'));
});

task('bootstrap', (done) => {
    parallel('bootstrapJs', 'bootstrapCss')(done);
});
