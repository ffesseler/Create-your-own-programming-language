var endTime = function (time, expr) {
	switch (expr.tag) {
	case 'note':
	case 'rest':
		return time + expr.dur;
	case 'seq':
		return time + endTime(time, expr.left) + endTime(time, expr.right);
	case 'par':
		return time + Math.max(endTime(time, expr.left), endTime(time, expr.right));
	case 'repeat':
		return time + expr.count * endTime(0, expr.section);
	default:
		return 0;
	}
};

var letterPitch = { A: 9, B: 11, C: 0, D: 2, E: 4, F: 5, G: 7 };

var convertToPitchNumber = function (pitch) {
	var letter = pitch[0], octave = pitch[1];
	return 12 + 12 * octave + letterPitch[letter.toUpperCase()];
};

var compileT = function (time, expr) {
	var note = {}, count = 0, arr = [];

	switch (expr.tag) {
	case 'note':
		note.tag = expr.tag;
		note.start = time;
		note.dur = expr.dur;
		note.pitch = convertToPitchNumber(expr.pitch);
		return [note];
	case 'rest':
		note.tag = expr.tag;
		note.start = time;
		note.dur = expr.dur;
		return [note];
	case 'seq':
		return compileT(time, expr.left).concat(compileT(endTime(time, expr.left), expr.right));
	case 'par':
		return compileT(time, expr.left).concat(compileT(time, expr.right));
	case 'repeat':
		for (count = 0; count < expr.count; count += 1) {
			arr = arr.concat(compileT(time + count * endTime(0, expr.section), expr.section));
		}
		return arr;
	default:
		return [];
	}
};

var compile = function (musexpr) {
	return compileT(0, musexpr);
};

module.exports.compile = compile;
module.exports.convertToPitchNumber = convertToPitchNumber;