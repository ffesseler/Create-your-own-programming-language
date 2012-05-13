var interpreter = require("../src/exercise3");
var expect = require('expect.js');

describe('Interpreter', function(){
	var expression, results;
    var env = {x:2, y:3, z:10};

    it('should interpret a variable', function() {
        expect(interpreter.evalScheem('x', env)).to.eql(2);
    }),
    it('should interpret define', function() {
        expression = ['define', 'a', 5];
        results = interpreter.evalScheem(expression, env)
        expect(results).to.eql(0);
        expect(env).to.eql({x:2, y:3, z:10, a:5});
    }),
    it('should interpret set', function() {
        expression = ['set!', 'a', 1];
        results = interpreter.evalScheem(expression, env)
        expect(results).to.eql(0);
        expect(env).to.eql({x:2, y:3, z:10, a:1});
    }),
    it('should interpret set', function() {
        expression = ['set!', 'x', 7];
        results = interpreter.evalScheem(expression, env)
        expect(results).to.eql(0);
        expect(env).to.eql({x:7, y:3, z:10, a:1});
    }),
    it('should interpret set', function() {
        expression = ['set!', 'y', ['+', 'x', 1]];
        results = interpreter.evalScheem(expression, env)
        expect(env).to.eql({x:7, y:8, z:10, a:1});
    })
})

