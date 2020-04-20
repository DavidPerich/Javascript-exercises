// Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.

var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
var isMidnight = true;
var isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return 'were' + species;
}

var i;
for (i = 0; i < species.length; i++) {
  var thisSpecies = species[i];
  var newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
      console.log('Beware of the ' + newSpecies + '!');
  }

  // if (newSpecies) {
  //   console.log('Beware of the ' + newSpecies + '!'); // If newSpecies isn't set by the if statemetn above then it will remain the value it was logged previously. This means it will return true and get printed aain.
}