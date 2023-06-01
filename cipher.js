//o Encapsulamento é uma forma de organizar, proteger e reutilizar o código de maneira eficiente//
const cipher = { 
  encode: function (offset, mensagem) {
    if (typeof mensagem !== "string" || typeof offset !== "number") {
      throw new TypeError();
    }
    let mensagemCriptografada = '';
    for (let i = 0; i < mensagem.length; i++) {
      const caractere = mensagem.charCodeAt(i);
      if (caractere === 32) { // Verifica se é um espaço
        mensagemCriptografada += ' '; // Mantém o espaço sem criptografar
      } else if (caractere >= 65 && caractere <= 90) {
        mensagemCriptografada += String.fromCharCode(((caractere - 65 + offset) % 26) + 65);
      }
    }
    return mensagemCriptografada;
  },
  
  decode: function (offset, mensagem) {
    if (typeof mensagem !== "string" || typeof offset !== "number") {
      throw new TypeError();
    }
    let mensagemDescriptografada = '';
    for (let i = 0; i < mensagem.length; i++) {
      const caractere = mensagem.charCodeAt(i);
      if (caractere === 32) { // Verifica se é um espaço
        mensagemDescriptografada += ' '; // Mantém o espaço sem decodificar
      } else if (caractere >= 65 && caractere <= 90) {
        let caractereDescriptografado = (caractere - 65 - offset + 26) % 26;
        if (caractereDescriptografado < 0) {
          caractereDescriptografado += 26;
        }
        mensagemDescriptografada += String.fromCharCode(caractereDescriptografado + 65);
      }
    }
    return mensagemDescriptografada;
  }
};

export default cipher; // Exporta como modulo, isto significa que seja ele pode ser importado em outros arquivos como js//

