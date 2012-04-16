var compiler = require("../src/compiler");
var expect = require('expect.js');

var melody1_mus = { tag: 'note', pitch: 'a4', dur: 125 };
var melody1_note = [ { tag: 'note', pitch: '69', start: 0, dur: 125 } ];
var melody2_mus = 
    { tag: 'seq',
      left: 
       { tag: 'seq',
         left: { tag: 'note', pitch: 'a4', dur: 250 },
         right: { tag: 'note', pitch: 'b4', dur: 250 } },
      right:
       { tag: 'seq',
         left: { tag: 'note', pitch: 'c4', dur: 500 },
         right: { tag: 'note', pitch: 'd4', dur: 500 } } };
var melody2_note = [
    { tag: 'note', pitch: 69, start: 0, dur: 250 },
    { tag: 'note', pitch: 71, start: 250, dur: 250 },
    { tag: 'note', pitch: 60, start: 500, dur: 500 },
    { tag: 'note', pitch: 62, start: 1000, dur: 500 } ];
var melody3_mus = 
    { tag: 'seq',
      left: 
       { tag: 'par',
         left: { tag: 'note', pitch: 'c3', dur: 250 },
         right: { tag: 'note', pitch: 'g4', dur: 500 } },
      right:
       { tag: 'par',
         left: { tag: 'note', pitch: 'd3', dur: 500 },
         right: { tag: 'note', pitch: 'f4', dur: 250 } } };
var melody3_note = [
    { tag: 'note', pitch: 48, start: 0, dur: 250 },
    { tag: 'note', pitch: 67, start: 0, dur: 500 },
    { tag: 'note', pitch: 50, start: 500, dur: 500 },
    { tag: 'note', pitch: 65, start: 500, dur: 250 } ];
var melody4_mus = 
    { tag: 'seq',
      left: 
       { tag: 'seq',
         left: { tag: 'note', pitch: 'c3', dur: 250 },
         right: { tag: 'repeat', section: { tag: 'note', pitch: 'g4', dur: 250 }, count: 3 } 
       },
      right:
       { tag: 'par',
         left: { tag: 'note', pitch: 'd3', dur: 500 },
         right: { tag: 'note', pitch: 'f4', dur: 250 } } };
var melody4_note = [
    { tag: 'note', pitch: 48, start: 0, dur: 250 },
    { tag: 'note', pitch: 67, start: 250, dur: 250 },
    { tag: 'note', pitch: 67, start: 500, dur: 250 },
    { tag: 'note', pitch: 67, start: 750, dur: 250 },
    { tag: 'note', pitch: 50, start: 1000, dur: 500 },
    { tag: 'note', pitch: 65, start: 1000, dur: 250 } ];

    

describe('Compiler', function(){
	describe('#compile seq tags', function(){
    it('should display one note', function() {
    	var notes = compiler.compile(melody1_mus);
    	expect(notes).to.eql(melody1_note);		
    }),
    it('should display 4 seq notes', function() {
    	var notes = compiler.compile(melody2_mus);
    	expect(notes).to.eql(melody2_note);		
    })
  }),

  describe('#compile par tags', function(){
    it('should display 2 par notes', function() {
    	var notes = compiler.compile(melody3_mus);
    	expect(notes).to.eql(melody3_note);		
    })
	}),

	describe('#compile repeat tags', function(){
    it('should display 6 seq notes with 3 repeats', function() {
    	var notes = compiler.compile(melody4_mus);
    	expect(notes).to.eql(melody4_note);		
    })
  })
})