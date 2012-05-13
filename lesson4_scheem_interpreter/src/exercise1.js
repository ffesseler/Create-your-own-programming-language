var evalScheem = function (expr) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case '+':
            return evalScheem(expr[1]) + evalScheem(expr[2]);
        case '-':
            return evalScheem(expr[1]) - evalScheem(expr[2]);
        case '*':
            return evalScheem(expr[1]) * evalScheem(expr[2]);
        case '/':
            return evalScheem(expr[1]) / evalScheem(expr[2]);
    }
};

module.exports.evalScheem = evalScheem;