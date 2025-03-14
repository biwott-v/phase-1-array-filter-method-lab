// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(
    (aname) =>
      aname === name ||
      aname === name.toLowerCase() ||
      aname === name.toUpperCase(),
  );
}

function fuzzyMatch(drivers, firstNameLetters) {
  let i = firstNameLetters.length;
  return drivers.filter((name) => name.slice(0, i) === firstNameLetters);
}


function matchName(drivers, name) {
  return drivers.filter((obj) => obj.name === name);
}
