var interpreter = require("../src/exercise1");
var expect = require('expect.js');

describe('Interpreter', function(){
	var expression;
	describe('#handle multiplication and division', function(){
    it('should interpret an atom', function() {
    	expect(interpreter.evalScheem(5)).to.eql(5)
    }),
    it('should interpret addition', function() {
    	expression = ['+', 2, 3];
    	expect(interpreter.evalScheem(expression)).to.eql(5)
    }),
    it('should interpret multiplication', function() {
		expression = ['*', 2, 3];
    	expect(interpreter.evalScheem(expression)).to.eql(6)
    }),
    it('should interpret division', function() {
		expression = ['/', 1, 2];
    	expect(interpreter.evalScheem(expression)).to.eql(0.5)
    })
  })
})

