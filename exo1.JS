function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
       after = after[0].toUpperCase() + after.slice(1);
    } else {
        after = after[0].toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));


let str = "je suis un potit blagueur"
function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

function sumAll(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let sum = 0;
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]));
  console.log(sumAll([5, 10]));
  console.log(sumAll([10, 5]));


  function smallestCommons(arr) {
    // s'assurer que les nombres sont dans l'ordre croissant
    arr.sort((a, b) => a - b);

    // tableau avec tous les nombres dans l'intervalle
    const range = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        range.push(i);
    }

    // calculer le plus grand commun diviseur (PGCD)
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
        // le ? sert a la même chose que if else
    }

    // calculer le plus petit commun multiple (PPCM)
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    // calculer le PPCM de tous les nombres dans le tableau
    return range.reduce((acc, num) => lcm(acc, num), 1);
}

// Cas de test
console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820


