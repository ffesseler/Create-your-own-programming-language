var PEG = require("pegjs");
var expect = require('expect.js');
var fs = require('fs');
var grammar;



var wrapExceptions = function(f) {
	return function(x) {
		try {
			return f(x);
		}
		catch(err) {
			return undefined;
		}
	};
}; 


describe('Parser Actions', function(){
	var parser;
	before(function () {
		grammar = fs.readFileSync("src/exercise2.pegjs").toString();
		parser = wrapExceptions(PEG.buildParser(grammar).parse);  
	});
	describe('#countrycode', function(){
		it('should not parse ""', function() {
	    	expect(parser("")).to.be(undefined);
	    }),
	    it('should parse canada', function() {
	    	expect(parser("ca")).to.eql('ca');
	    })
	})
})

describe('Repetition and Choices', function(){
	var parser;
	before(function () {
		grammar = fs.readFileSync("src/exercise3.pegjs").toString();
		parser = wrapExceptions(PEG.buildParser(grammar).parse);  
	});
	describe('#word lower case and upper case', function(){
		it('should not parse empty string', function() {
	    	expect(parser("")).to.be(undefined);
	    }),
	    it('should parse "dog"', function() {
	    	expect(parser('dog')).to.eql('dog');
	    }),
	    it('should not parse "Dog"', function() {
	    	expect(parser('Dog')).to.be(undefined);
	    }),
	    it('should parse "DOG"', function() {
	    	expect(parser('DOG')).to.eql('DOG');
	    })
	})
})

describe('Scheme Syntax', function(){
	var parser;
	before(function () {
		grammar = fs.readFileSync("src/exercise4.pegjs").toString();
		parser = wrapExceptions(PEG.buildParser(grammar).parse);  
	});
	describe('#lowercase words separated by space', function(){
		it('should not parse empty string', function() {
	    	expect(parser("")).to.be(undefined);
	    }),
	    it('should parse "dog"', function() {
	    	expect(parser('dog')).to.contain('dog');
	    }),
	    it('should parse "black dog"', function() {
	    	expect(parser('black dog')).to.contain('black');
	    	expect(parser('black dog')).to.contain('dog');
	    }),
	    it('should parse "anglry black dog"', function() {
	    	expect(parser('angry black dog')).to.contain('black');
	    	expect(parser('angry black dog')).to.contain('dog');
	    	expect(parser('angry black dog')).to.contain('angry');
	    }),
	    it('should not parse "Black DoG"', function() {
	    	expect(parser("Black DoG")).to.be(undefined);
	    })
	})
})