import cipher from './cipher.js';
//document.getElementById serve para selecionar um elemento específico na página com base no seu atributo "id"//
const mensagem = document.getElementById('mensagem');
const offset = document.getElementById('offset');
const resultado = document.getElementById('resultado');

function criptografar() {
  const mensagemEntrada = mensagem.value; //serve para atribuir o valor do mensagem//
  const offsetEntrada = parseInt(offset.value); // parseInt somente para garantir que o valor seja tratado como número//
  //passo como argumentos o valor de offsetEntrada e mensagemEntrada//
  const mensagemCriptografada = cipher.encode(offsetEntrada, mensagemEntrada); //isso chama a função de criptografia passando o deslocamento e a mensagem como parâmetros//
  resultado.value = mensagemCriptografada;
}

function descriptografar() {
  const mensagemEntrada = mensagem.value;
  const offsetEntrada = parseInt(offset.value);
  const mensagemDescriptografada = cipher.decode(offsetEntrada, mensagemEntrada);
  resultado.value = mensagemDescriptografada;
}

function limpar() {
  mensagem.value = ''; // Limpa o conteúdo da caixa de texto mensagem //
  resultado.value = ''; // Limpa o conteúdo da caixa de texto resultado //
}

//addEventListener seleciona um elemento no HTML, vai ter um evento que no meu caso é o click e me permite executar a função que eu tinha definido//
const btnCriptografar = document.getElementById('Criptografar');
btnCriptografar.addEventListener('click', criptografar);

const btnDescriptografar = document.getElementById('Descriptografar');
btnDescriptografar.addEventListener('click', descriptografar);

const btnLimpar = document.getElementById('Limpar');
btnLimpar.addEventListener('click', limpar);