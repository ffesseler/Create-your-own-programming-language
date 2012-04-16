var compiler = require("../src/compiler");
var expect = require('expect.js');

describe('Compiler', function(){
	describe('#convertToPitchNumber', function(){
    it('should convert letter and octave to pitch number', function() {
    	var number = compiler.convertToPitchNumber("A1");
    	expect(number).to.eql(33);
    	number = compiler.convertToPitchNumber("B2");
    	expect(number).to.eql(47);
    	number = compiler.convertToPitchNumber("C3");
    	expect(number).to.eql(48);
    	number = compiler.convertToPitchNumber("D4");
    	expect(number).to.eql(62);
    	number = compiler.convertToPitchNumber("E5");
    	expect(number).to.eql(76);
    	number = compiler.convertToPitchNumber("F6");
    	expect(number).to.eql(89);
    	number = compiler.convertToPitchNumber("G7");
    	expect(number).to.eql(103);
    })
  })
})