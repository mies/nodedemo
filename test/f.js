var path = require('path');


exports.wercker = function(callback){
  'use strict';
  path.fileExists('iets', function(result){
    callback(result);
  })
};
