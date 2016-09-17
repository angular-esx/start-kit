function _task (params){
  var _baseTask = require('./base-task')();
  var _path = require('path');
  
  _baseTask.run = function(){
    var _self = this;
    var _config = {
      context:_path.resolve(__dirname, '../..'),
      entry: {
        'dist/js/app': './app/main.js'
      },
      output: {
        filename: `[name].js`
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'angular2-template-loader'
          },
          { test: /\.html$/, loader: 'html-loader' },
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.css$/, loader: './_configs/loaders/clean-code-loader!css-loader' },
        ]
      }
    };

    return new Promise(function(resolve, reject){
      _self.webpack(_config, function(err, stats){
        if (err) {
          console.log(err);
          reject();
        }

        if (stats) {
          console.log(stats.toString({
            colors: true,
            children: false,
            chunks: false,
            modules: false
          }));
        }
        resolve();
      });
    });
  };

  return _baseTask.getStream(params);
}

module.exports = _task;