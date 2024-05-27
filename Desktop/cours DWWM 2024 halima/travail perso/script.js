const guess = 8;
while (true) {
  const chiffre = prompt("Votre chiffre") * 1;
  if (chiffre < guess) {
    console.log("Plus");
  } else if (chiffre > guess) {
    console.log("Moins");
  } else {
    break;
  }
}
console.log("Bravo ! vous avez deviné");
