function _task (params){
  var _baseTask = require('./base-task')();

  _baseTask.run = function(){
    var _runSequence = this.runSequence;

    this.gulp.watch([
      './app/**/*.js',
      './examples/**/*.js',
      './app/**/*.css',
      './examples/**/*.css',
      './app/**/*.html',
      './examples/**/*.html',
    ], function () {
      _runSequence('clean', ['polyfill', 'webpack', 'index'], 'reload');
    });
  };

  return _baseTask.getStream(params);
}

module.exports = _task;