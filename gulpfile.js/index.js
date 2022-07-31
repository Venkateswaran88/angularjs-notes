const { series, watch, task } = require('gulp');

// imports for tasks
const { build } = require('./tasks/build');
require('./tasks/watch');


exports.default = build;
exports.cw = series([build, 'watch']);


