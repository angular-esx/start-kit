function _task (params){
  var _baseTask = require('./base-task')();
  
  _baseTask.run = function(){
    return this.gulp.src([
      './node_modules/core-js/client/shim.min.js',
      './node_modules/zone.js/dist/zone.min.js',
      './node_modules/reflect-metadata/Reflect.js',
    ])
    .pipe(this.gulp.dest('./dist/js'));
  };

  return _baseTask.getStream(params);
}

module.exports = _task;