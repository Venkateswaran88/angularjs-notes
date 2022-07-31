const { parallel, series, src, dest, watch, task } = require('gulp');
const concat = require('gulp-concat');
const cleanhtml = require('gulp-cleanhtml');
const angularTemplatecache = require('gulp-angular-templatecache');
const { paths } = require('../../paths');


task('angularJs', () => {
    return src([
        './ng-app/**/*module*.js',
        './ng-app/**/*.js'
    ])
        .pipe(concat('app-scripts.js'))
        .pipe(dest(paths.dest));
});

task('angularTemplates', () => {
    return src([
        './ng-app/**/*.html'
    ])
        .pipe(cleanhtml())
        .pipe(angularTemplatecache('app-templates.js', {
            root: '/ng-app/',
            standalone: false,
            module: 'myNotes'
        }))
        .pipe(dest(paths.dest));
});

task('angular', (done) => {
    parallel('angularTemplates', 'angularJs')(done);
});
