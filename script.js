/*SLICE- EXTRAIR QUALQIER PARTE DE UM ARRAY.
Portanto, com o método slice, podemos extrair parte de qualquer array,
mas sem alterar o array original.
E é por isso que é chamado de fatia.
Então, array. slice, e agora como nas strings,
temos o parâmetro begin.
E então este é o índice no qual começaremos a extrair. isso não altera o array original arr,.
Em vez disso, ele retorna uma nova matriz.
Portanto, uma cópia do array, mas apenas com as partes extraídas.*/

let arr =['a','b','c', 'd','e'];
console.log(arr.slice(1));

/*)Saida ['b', 'c', 'd', 'e'] fatiou ate o 1 e apartir dai mostrou um novo array, sem alterar o original.
Podemos definir o parametro final, o parametro end nao esta incuido no output na saida como no exemplo abaixo */
/*Saida: (2) ['c', 'd']*/
console.log(arr.slice(2,4));

/*podemos definir um parâmetro de início negativo e, em seguida,
ele começará a copiar a partir do final do array.E assim, é muito fácil simplesmente
obter o último elemento de qualquer array.
Saída:(2) ['d', 'e']
Saída:['e']-1 é sempre o ultimo elemento do array.
*/
console.log(arr.slice(-2));
console.log(arr.slice(-1));
/*Também podemos usar um índice negativo como o parâmetro final.
Então, vamos começar a extrair na posição número um, até menos um, basicamente.
Saida:(2) ['b', 'c'], comecou a extrair do 1 ate a menos 2*/
console.log(arr.slice(1,-2));

/*podemos usar o método
slice para simplesmente criar uma cópia superficial de qualquer array.simplesmente o chamamos sem nenhum argumento.
E então, de fato, obtemos aqui exatamente o mesmo array,tão, de fato, obtemos aqui exatamente o mesmo array.
Saida:(5) ['a', 'b', 'c', 'd', 'e']*/
console.log(arr.slice());
console.log([...arr]);
/*Criar uma nova matriz
e expandir a matriz original para ela.E isso nos dá exatamente o mesmo resultado.
Portanto, a questão é: você deve usar qual?Portanto, é apenas uma questão de preferência pessoal.
A única vez que você realmente precisa usar o método
slice aqui é quando deseja encadear vários métodos,
chamando um após o outro.
-----------------------------------------------------------------------------------------------------*/


/*SPLICE-E um método de emenda funciona quase da mesma maneira que a fatia.
Mas a diferença fundamental
é que ele realmente altera a matriz original.
Portanto, ele transforma essa matriz.*/
