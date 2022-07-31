const { dest, src, task, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const del = import('del');
const { paths } = require('../paths');


task('css', () => {
    return src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(dest(paths.dest));
});

exports.css = series(['css']);
