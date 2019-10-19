### Use ENVs
```
process.env.USER
'zampieri'

process.env.USER = 'baba'
'baba'
```

### Use process
```
process.stdout(Math.random().toString());

console.log(process, { depth: 0 });
```

### Use arguments
```
function X() {
  console.log(arguments);
}

X(1, 3, 5);
// =>[Arguments] { '0': 1, '1': 3, '2': 5 }
```

### WRAPPING, IIFE
```
require('module').wrapper

'function(exports, require, module, _flename, _dirname)'
console.log(arguments);
```

### Streams
zip, crypto ... read, write, transform
it's better use stream always

### Scaling
to cluster use pm2
to http use express