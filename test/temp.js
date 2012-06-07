var mysql = require('mysql');
/**
 * @param {Object} test node-unit test object.
 */
exports.testSomething2 = function(test) {
    'use strict';
    test.expect(1);


  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret'
  });

  connection.connect();

  connection.query('SELECT 1', function(err, rows, fields) {
    if (err) throw err;

    console.log('Query result: ', rows);
  });

  connection.end();

    test.ok(1, 'this assertion should pass');
    test.done();
};


/**
 * @param {Object} test node-unit test object.
 */
exports.testSomethingEls = function(test) {
    'use strict';
    test.expect(2);
    test.ok(1, 'this assertion should FAIL');
    test.done();
};
