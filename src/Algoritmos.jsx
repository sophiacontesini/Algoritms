function ciclotron(particula, matriz) {
  const n = matriz.length;
  const novaMatriz = [];

  for (let i = 0; i < n; i++) {
    const linha = [];

    for (let j = 0; j < n; j++) {
      if (particula === 'e' && (i === 0 || j === n - 1)) {
        linha.push(particula);
      } else if (
        particula === 'p' &&
        (i === 0 || j === n - 1 || (i === n - 1 && j === n - 1))
      ) {
        linha.push(particula);
      } else if (particula === 'n' && i === 0) {
        linha.push(particula);
      } else {
        linha.push(1);
      }
    }

    novaMatriz.push(linha);
  }

  return novaMatriz;
}

// Exemplos de uso
const matriz = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];
const resultado1 = ciclotron('e', matriz);
console.log(resultado1);

const matriz2 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];
const resultado2 = ciclotron('p', matriz2);
console.log(resultado2);

const matriz3 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];
const resultado3 = ciclotron('n', matriz3);
console.log(resultado3);
