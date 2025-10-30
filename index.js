/**** Escreva o código abaixo 👇******/
// === SOLUÇÕES DA LISTA DE FUNÇÕES ===

// 1) Soma simples
function somar(a, b) {
  return a + b;
}

// 2) Multiplicação simples
function multiplicar(a, b) {
  return a * b;
}

// 3) Subtração simples
function subtrair(a, b) {
  return a - b;
}

// 4) Divisão com verificação de zero
function dividir(a, b) {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
}

// 5) Calculadora de média (reaproveitando dividir)
function calcularMedia(nota1, nota2, nota3, nota4) {
  const soma = somar(somar(nota1, nota2), somar(nota3, nota4));
  return dividir(soma, 4);
}

// 6) Exponenciação (Math.pow)
function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

// 7) Área de um retângulo (reaproveitando multiplicar)
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

// 8) Par ou ímpar
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";
}

// 9) Raiz quadrada (Math.sqrt)
function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

// 10) Hipotenusa (reaproveitando somar, elevarPotencia e calcularRaizQuadrada)
function calcularHipotenusa(cateto1, cateto2) {
  const somaQuadrados = somar(
    elevarPotencia(cateto1, 2),
    elevarPotencia(cateto2, 2)
  );
  return calcularRaizQuadrada(somaQuadrados);
}


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
