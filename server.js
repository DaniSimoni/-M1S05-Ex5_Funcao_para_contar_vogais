/* Criar um algoritmo que conte o total de vogais baseado na string que foi enviada.

Regra 1: Caso não seja uma string, retorne uma mensagem de erro.

Regra 2: Caso identifique pelo menos 1 vogal, retorne o número exato.

Regra 3: Caso na palavra, não conste nenhuma vogal, retorne uma mensagem informe que não tem nenhuma vogal */

function contarVogais(string) {
    if (typeof string !== 'string') {
      console.log('O valor informado não é uma string');
    }
  
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let totalVogais = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (vogais.includes(string[i])) {
        totalVogais++;
      }
    }
  
    if (totalVogais === 0) {
      console.log('Não há vogais na string');
    } else {
      console.log(`A string possui ${totalVogais} vogais`);
    }
  }
  
  contarVogais('daniel');
  contarVogais('xyz');
  contarVogais(123);
  contarVogais('inconstitucionalissimamente');
  contarVogais('De tarde quero descansar, chegar até a praia e ver que o vento ainda está forte e vai ser bom subir na pedras...')


