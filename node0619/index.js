function X() {
  console.log(arguments);
}

X(1, 3, 5);
// =>[Arguments] { '0': 1, '1': 3, '2': 5 }

// WRAPPING, IIFE
// require('module').wrapper
// 'function(exports, require, module, _flename, _dirname)'
// console.log(arguments);
