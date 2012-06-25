var mysql = require('mysql');
/**
 * @param {Object} test node-unit test object.
 */
exports.testSomething2 = function(test) {
  'use strict';
  test.expect(1);


  /*
   console.log('process.env.WERCKER_MYSQL_IPADDRESS');
   console.log(process.env.WERCKER_MYSQL_IPADDRESS);

   var connection = mysql.createConnection({
   host     : process.env.WERCKER_MYSQL_IPADDRESS || 'localhost',
   user     : 'wercker',
   password : 'wercker'
   });

   connection.connect();

   connection.query('SELECT 1', function(err, rows, fields) {
   if(err){
   console.log(err);
   }
   //if (err) throw err;

   test.ok(1, 'this assertion should pass');
   test.done();

   console.log('Query result: ', rows);
   });

   connection.end();

   */
  test.ok(1, 'this assertion should pass');
  test.done();

};


/**
 * @param {Object} test node-unit test object.
 */
exports.testSomethingEls = function(test) {
  'use strict';
  test.expect(1);
  test.ok(1, 'this assertion should FAIL');
  test.done();
};




/**
 * @param {Object} test node-unit test object.
 */
exports.testRequire = function(test) {
  'use strict';
  test.expect(1);
  var fs = require('fs');
  fs.fileExists = function(callback){ callback(true);};

  var result = require('./f').wercker(
    function(r){

      test.ok(r, 'this assertion should FAIL');
      test.done();
    }
  );

};

