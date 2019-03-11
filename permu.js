module.exports = function(length, attributes) {
  const permutations = attributes.map(function(a) {
    return [a];
  });

  return permutate(length, attributes, permutations);
};

function permutate(length, attributes, permutations) {
  let currentPerms = [];

  for (const p of permutations) {
    for (const a of attributes) {
      currentPerms.push(p.concat(a));
    }
  }

  if (currentPerms[0].length < length) {
    return permutate(length, attributes, currentPerms);
  }

  return currentPerms;
}
