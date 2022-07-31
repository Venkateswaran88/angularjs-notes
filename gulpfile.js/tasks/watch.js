const { series, watch, task, parallel } = require('gulp');

const { build, buildTemplate } = require('./build');
const { css } = require('./css');

task('watchTemplate', () => {
    watch([
      './ng-app/**/*.js',
      './ng-app/**/*.html'], (done) => {
        series([buildTemplate])(done);
    });
});

task('watchCss', () => {
    watch(['sass/**/*.scss'], (done) => {
        series([css])(done);
    });
});

task('watch', (done) => {
    parallel('watchTemplate', 'watchCss')(done);
});
