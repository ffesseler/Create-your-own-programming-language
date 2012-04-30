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

grammar = fs.readFileSync("src/exercise2.pegjs").toString();
parser = wrapExceptions(PEG.buildParser(grammar).parse);  


describe('Parser Actions', function(){
	describe('#countrycode', function(){
		it('should not parse ""', function() {
	    	expect(parser("")).to.be(undefined);
	    }),
	    it('should parse canada', function() {
	    	expect(parser("ca")).to.eql('ca');
	    }),
	    it('should not parse uae', function() {
	    	expect(parser("uae")).to.be(undefined);
	    })
	})
})