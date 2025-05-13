// EXO 1
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

// EXO 2
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

// EXO 3
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

// EXO 4
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

// EXO 5
// Mastermind en JavaScript


const COLORS = ['R', 'G', 'B', 'Y', 'O', 'P']; 
const CODE_LENGTH = 4;
const MAX_TURNS = 4;

// 1. Génération du code secret
function generateSecret() {
  const secret = [];
  for (let i = 0; i < CODE_LENGTH; i++) {
    const idx = Math.floor(Math.random() * COLORS.length);
    secret.push(COLORS[idx]);
  }
  return secret;
}

// 2. Feedback : pions noirs et blancs
function getFeedback(secret, guess) {
  const black = secret.filter((c, i) => c === guess[i]).length;
  // Comptage pour blancs
  const secretRest = [];
  const guessRest = [];
  secret.forEach((c, i) => { if (c !== guess[i]) secretRest.push(c); });
  guess.forEach((c, i) => { if (c !== guess[i]) guessRest.push(c); });
  // Blancs = pour chaque couleur dans guessRest, min(nombre dans secretRest, dans guessRest)
  let white = 0;
  COLORS.forEach(color => {
    const countSecret = secretRest.filter(c => c === color).length;
    const countGuess = guessRest.filter(c => c === color).length;
    white += Math.min(countSecret, countGuess);
  });
  return { black, white };
}

// 3. Boucle de jeu
function playMastermind() {
  const secret = generateSecret();
  console.log("=== Bienvenue au Mastermind! ===");
  console.log(`Couleurs possibles: ${COLORS.join(', ')}`);
  console.log(`Entrez un code de ${CODE_LENGTH} lettres (ex: RGBY).`);

  for (let turn = 1; turn <= MAX_TURNS; turn++) {
    const input = prompt(`Tour ${turn}/${MAX_TURNS}: Votre proposition ?`).toUpperCase();
    if (!input || input.length !== CODE_LENGTH) {
      console.log('Entrée invalide. Réessayez.');
      turn--; continue;
    }
    const guess = input.split('');
    const { black, white } = getFeedback(secret, guess);
    console.log(`Résultat: ${black} noir(s), ${white} blanc(s)`);
    if (black === CODE_LENGTH) {
      console.log(`Bravo! Vous avez trouvé en ${turn} tours.`);
      return;
    }
  }
  console.log(`Dommage! Le code secret était ${secret.join('')}.`);
}

// Lancer le jeu
playMastermind();
