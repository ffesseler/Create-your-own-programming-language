var interpreter = require("../src/exercise2");
var expect = require('expect.js');

describe('Interpreter', function(){
	var expression;
    var env = {x:2, y:3, z:10};

	describe('#handle multiplication and division', function(){
    it('should interpret an atom', function() {
    	expect(interpreter.evalScheem(5, env)).to.eql(5);
    }),
    it('should interpret a variable', function() {
        expect(interpreter.evalScheem('x', env)).to.eql(2);
    }),
    it('should interpret addition', function() {
        expression = ['+', 2, 3];
        expect(interpreter.evalScheem(expression, env)).to.eql(5);
    }),
    it('should interpret multiplication', function() {
        expression = ['*', 'y', 3];
        expect(interpreter.evalScheem(expression, env)).to.eql(9);
    }),
    it('should interpret division', function() {
        expression = ['/', 'z', ['+', 'x', 'y']];
        expect(interpreter.evalScheem(expression, env)).to.eql(2);
    })
  })
})

