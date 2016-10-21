(function() {
  var _GULP_TASKS = './_configs/gulp-tasks/';

  var _gulp = require('gulp');
  
  var _plugins = require("gulp-load-plugins")({
    pattern: [
      'yargs', 'del', 'run-sequence', 'browser-sync',
      'webpack', 'webpack-stream'
    ],
    renameFn: function (name) {  
      return name
            .replace('gulp-', '')
            .replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
    }
  });

  _gulp.task('start', function () {
    _plugins.runSequence('clean', ['polyfill', 'webpack', 'index'], ['watch', 'browser-sync']);
  });

  _gulp.task('build', function () {
    _plugins.runSequence('clean', ['polyfill', 'webpack', 'index']);
  });

  _registerTask('clean');

  _registerTask('polyfill');

  _registerTask('webpack');

  _registerTask('browser-sync');

  _registerTask('watch');

  _gulp.task('reload', function () {
    _plugins.browserSync.reload();
  });

  _gulp.task('index', function() {
    return _gulp.src('./app/index.html')
    .pipe(_gulp.dest('./dist'));
  });

  function _registerTask(taskName, dependencies) {
    if(dependencies){
      _gulp.task(taskName, dependencies, _getTask(taskName));
    }
    else {
     _gulp.task(taskName, _getTask(taskName));
    }
  }

  function _getTask(taskName) {
    return require(_GULP_TASKS + taskName)({
      gulp: _gulp,
      plugins: _plugins,
      args: _plugins.yargs.argv
    });
  }
})();