const add = function(...args) {
  if (args.length !== 2) return "ERROR";
  if (!Number.isFinite(args[0])) return "ERROR";
  if (!Number.isFinite(args[1])) return "ERROR";
  const [x, y] = args;
  return x + y;
};

const subtract = function(...args) {
	if (args.length !== 2) return "ERROR";
  if (!Number.isFinite(args[0])) return "ERROR";
  if (!Number.isFinite(args[1])) return "ERROR";
  const [x, y] = args;
  return x - y;
};

const sum = function(...args) {
  args = args.flat();
	const len = args.length;
  const valid = args.filter(x => Number.isFinite(x));
  if (valid.length !== len) return "ERROR";
  return valid.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(...args) {
  args = args.flat();
  const len = args.length;
  const valid = args.filter(x => Number.isFinite(x));
  if (valid.length !== len) return "ERROR";
  return valid.reduce((acc, cur) => acc * cur, 1);
};

const power = function(...args) {  
	if (args.length !== 2) return "ERROR";
  if (!Number.isFinite(args[0])) return "ERROR";
  if (!Number.isFinite(args[1])) return "ERROR";
  const [x, y] = args;
  return Math.pow(x, y);
};

const factorial = function(...args) {
  if (args.length !== 1) return "ERROR";
  if (!Number.isFinite(args[0])) return "ERROR";
  const x = args[0];
  if (x === 0) return 1;
  return factorial(x - 1) * x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
