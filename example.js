const permu = require("./permu");

const items = [1, 2, 3];
const attributes = ["red", "blue"];

const permutations = permu(items.length, attributes);

console.log(permutations);
