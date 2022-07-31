const { parallel, series, task } = require('gulp');

// Tasks
const { clean } = require('./clean');
const { css } = require('./css');
const { bootstrap } = require('../common/bootstrap');
const { angular } = require('../common/angular/angular');
const { ngVendor } = require('../common/angular/ngVendor');

task('build', (done) => {
    parallel('bootstrap', 'angular', 'ngVendor')(done);
});

exports.build = series([clean, css, 'build']);
exports.buildTemplate = series(['build']);