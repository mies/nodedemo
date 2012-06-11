/**
 * @param {Object} test node-unit test object.
 */
exports.testSomething2 = function(test) {
    'use strict';
    test.expect(1);
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
