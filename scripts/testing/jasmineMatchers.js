/**
 * Jasmine custom matcher for deep matching objects (equivalent to mocha's to.deep.equal() )
 */

function addToDeepEqualMatcher(){
    jasmine.addMatchers({
        toDeepEqual: function(util, customEqualityTesters) {
            return {
                compare: function(actual, expected) {
                    var result = {};
                    result.pass = _.isEqual(actual, expected);
                    return result;
                }
            }
        }
    });
}