//2 - questão
//2-a)
const numero= [1,2,3,4,5];

const numeros = numero.map( item => item*10);
console.log("2-a)"+numeros);

//2-b)
//  const usuario = {nome:'ana', idade:18};

//  const idade = usuario => usuario.idade;
//  console.log("2-b)"+idade(usuario));
 
//2-c

 const nome = 'Bia';
 const idade = 20;
 const usua = (nome= 'Ana', idade = 18) => ({nome,idade});

 console.log("2-c) "+usua(nome, idade));
 console.log("2-c) "+usua(nome));