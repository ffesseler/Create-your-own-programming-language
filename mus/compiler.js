// maybe some helper functions
var endTime = function (time, expr) {
    
    if (expr.tag == 'note')
    {
        return time + expr.dur;
    }
    else
    {
        if (expr.tag == 'seq') {
            return time + endTime(time, expr.left) + endTime(time, expr.right);
        }
        else {
            return time + Math.max(endTime(time, expr.left), endTime(time,expr.right));
        }
    }
};

var compileT = function(time, expr) {
    var note = {};
    if (expr.tag == 'note')
    {
        note.tag = expr.tag;
        note.pitch = expr.pitch;
        note.start = time;
        note.dur = expr.dur;
        return [note];
    }
    else
    {
        if (expr.tag == 'seq') {
            return compileT(time, expr.left).concat(compileT(endTime(time, expr.left), expr.right));
        }
        else {
            return compileT(time, expr.left).concat(compileT(time, expr.right));
        }
    }
};

var compile = function (musexpr) {
    console.log(compileT(0, musexpr));
    return compileT(0, musexpr);
};

var melody_mus = 
    { tag: 'seq',
      left: 
       { tag: 'seq',
         left: { tag: 'note', pitch: 'a4', dur: 250 },
         right: { tag: 'note', pitch: 'b4', dur: 250 } },
      right:
       { tag: 'seq',
         left: { tag: 'note', pitch: 'c4', dur: 500 },
         right: { tag: 'note', pitch: 'd4', dur: 500 } } };

console.log(melody_mus);
console.log(compile(melody_mus));