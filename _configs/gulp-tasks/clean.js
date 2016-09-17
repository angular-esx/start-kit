function _task (params){
  var _baseTask = require('./base-task')();
  
  _baseTask.run = function(){
    this.del.sync([
      './dist/**'
    ]);
  };

  return _baseTask.getStream(params);
}

module.exports = _task;