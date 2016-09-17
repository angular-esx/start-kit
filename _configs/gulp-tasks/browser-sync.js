function _task (params){
  var _baseTask = require('./base-task')();

  _baseTask.run = function(){
    this.browserSync({
      server: {
        baseDir: './dist',
        index: 'index.html'
      },
      port: 3000,
      open: true,
      notify: false
    });
  };

  return _baseTask.getStream(params);
}

module.exports = _task;