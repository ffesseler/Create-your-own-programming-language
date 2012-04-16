// maybe some helper functions
var endTime = function (time, expr) {
	if (expr.tag === 'note' || expr.tag === 'rest') {
		return time + expr.dur;
	} else {
		if (expr.tag === 'seq') {
			return time + endTime(time, expr.left) + endTime(time, expr.right);
		} else if (expr.tag === 'par') {
			return time + Math.max(endTime(time, expr.left), endTime(time, expr.right));
		} else {
			return time + expr.count * endTime(0, expr.section);
		}
	}
};

var letterPitch = function (letter) {
	switch (letter.toUpperCase()) {
	case 'A':
		return 9;
	case 'B':
		return 11;
	case 'C':
		return 0;
	case 'D':
		return 2;
	case 'E':
		return 4;
	case 'F':
		return 5;
	case 'G':
		return 7;
	}
};

var convertToPitchNumber = function (pitch) {
	var letter = pitch[0], octave = pitch[1];
	return 12 + 12 * octave + letterPitch(letter);
};

var compileT = function (time, expr) {
	var note = {}, count = 0, arr = [];
	if (expr.tag === 'note' || expr.tag === 'rest') {
		note.tag = expr.tag;
		note.start = time;
		note.dur = expr.dur;
		if (expr.tag === 'note') {
			note.pitch = convertToPitchNumber(expr.pitch);
		}
		return [note];
	} else {
		if (expr.tag === 'seq') {
			return compileT(time, expr.left).concat(compileT(endTime(time, expr.left), expr.right));
		} else if (expr.tag === 'par') {
			return compileT(time, expr.left).concat(compileT(time, expr.right));
		} else {
			for (count = 0; count < expr.count; count++) {
				arr = arr.concat(compileT(time + count * endTime(0, expr.section), expr.section));
			}
			return arr;
		}
	}
};

var compile = function (musexpr) {
	return compileT(0, musexpr);
};

var melody_mus = 
	{ tag: 'seq',
		left: 
		 { tag: 'seq',
			 left: { tag: 'note', pitch: 'a4', dur: 250 },
			 right: { tag: 'rest', pitch: 'b4', dur: 250 } },
		right:
		 { tag: 'seq',
			 left: { 	tag: 'repeat',
  							section: { tag: 'note', pitch: 'g4', dur: 250 },
  							count: 3 },
			 right: { tag: 'note', pitch: 'c4', dur: 500 } } };

console.log(compile(melody_mus));