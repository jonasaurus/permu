# Permu

Get all possible permutations of a given length, and a given array of attributes.

```bash
npm install permu
```

## Example

```js
const permu = require("permu");

const items = [1, 2, 3];
const attributes = ["red", "blue"];

const permutations = permu(items.length, attributes);

console.log(permutations);

/*
[ [ 'red', 'red', 'red' ],
  [ 'red', 'red', 'blue' ],
  [ 'red', 'blue', 'red' ],
  [ 'red', 'blue', 'blue' ],
  [ 'blue', 'red', 'red' ],
  [ 'blue', 'red', 'blue' ],
  [ 'blue', 'blue', 'red' ],
  [ 'blue', 'blue', 'blue' ] ]
*/
```

## License

MIT
