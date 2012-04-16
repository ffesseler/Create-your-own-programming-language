var buster = require("buster");

buster.testCase("A module", {
    "states the obvious": function () {
        assert(true);
    }
});

/*
var melody_mus = 
	{ tag: 'seq',
		left: 
		 { tag: 'seq',
			 left: { tag: 'note', pitch: 'a4', dur: 250 },
			 right: { tag: 'rest', pitch: 'b4', dur: 250 } },
		right:
		 { tag: 'seq',
			 left: {	tag: 'repeat',
  							section: { tag: 'note', pitch: 'g4', dur: 250 },
  							count: 3 },
			 right: { tag: 'note', pitch: 'c4', dur: 500 } } };
			 */