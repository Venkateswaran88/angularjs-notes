const { task, series } = require('gulp');
const del = import('del');
const { paths } = require('../paths');

task('clean', (done) => {
    return del.then(function(response){
        response.deleteAsync([
            paths.dest + '/**/*'
        ]);
    });
});

exports.clean = series(['clean']);