/* A function that truncate a string (first argument) if it is longer than the given maximum string length (second argument). And return the truncated string with a '...' ending. However, if the given maximum string length 'num' is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string. */
function truncateString(str, num) {
  
  var strAux;
  
  // Primeira validação, se 'num' for menor ou igual a 3
  // a string não é truncada.
  if (num <= 3) {
    
      strAux = str.slice(0, num);
    
      return strAux+"...";

    // Segunda validação, se o tamanho da string for maior que 'num'
    // entao a string é truncada.
  } else if (str.length > num) {
    
    strAux = str.slice(0, num-3);
    
    return strAux+"...";  
  } else {

    // Se caso falahar em todas validações signifca que o tamanho da string
    // é menor que 'num'.
    return str;
    
  }
  
}
truncateString("Peter Piper picked a peck of pickled peppers", 14);


/***************************************************************************************************************/
/* A function that return the provided string with the first letter of each word capitalized and the rest of the word in lower case. */
function titleCase(string) {
  
  /* Primeiramente, transformando toda a string para 
     lowerCase, para n haver erro de ter outra letra além 
     da primeira em upperCase  */
  var stringLowerCase = string.toLowerCase();
  
  // Dividino as palavras da string em um array
  var arrayOfString = stringLowerCase.split(" ");
  
  // Variáveis auxiliares para a transaformação da primeira letra
  var word;
  var newWord;
  
  // Percorrendo array de palavras da string
  for (var i = 0; i < arrayOfString.length; i++) {

    /* Atribuindo a palavra atual do array à uma das 
       variáveis auxiliares para que seja possivel substituir
       a primeira letra da palavra pela mesma letra porem upperCase */
    word = arrayOfString[i];

    /* Criando uma expressão regular com RegExp, substituindo 
       toda primeira letra que seja um alphanumeric (\w) pelo
       retorno da função que recebe como parametro tal letra encontrada
       porém upperCase */
    newWord = word.replace(/\w/, function(fistLetterMatched){
                                   return fistLetterMatched.toUpperCase();
                                 });

    /* Atribuindo entao a palavra com a primeira letra upperCase
       à sua correta posição do array */
    arrayOfString[i] = newWord;
  }
  
  //Transformando array de palavras em uma string completa
  var newString = arrayOfString.join(" ");
  
  return newString;
}
titleCase("sHoRt AnD sToUt");


/***************************************************************************************************************/
/* A function that reverse the provided string. */
function reverseString(string) {

	var arrayOfString = string.split("");
	arrayOfString.reverse();
	string = arrayOfString.join("");

return string;
}
reverseString("Greetings from Earth");


/***************************************************************************************************************/
/* A function that repeat a given string (first argument) 'num' times (second argument). And return an empty string if num is not a positive number. */
function repeatStringNumTimes(str, num) {
  
  if (num < 0) {
    return "";
  } else {
    return str.repeat(num);
  }
  
}
repeatStringNumTimes("abc", 5);


/***************************************************************************************************************/
/* A function that return true if the given string is a palindrome. Otherwise, return false.
Note
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, spacing and symbols. */
function palindrome(string) {
  
  /* Criando uma string e atribuindo a ela a string passada por parâmetro 
     porém sem nenhum caracter non-alphanumeric e toda lowerCase. */
  
  var newString = string.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
  
  /* Atribuindo a nova string totalmente lowerCase e sem qualquer 
     caracter non-alphanumeric à velha string passada por parâmetro. */
  
  string = newString;
  
  /* Criando um array e passando cada caracter da string para uma posição do            array (na sequência em que a string foi passada) ou seja:
     arrayOfNewString = ["e", "y", "e",]; */
  
  var arrayOfNewString = newString.split("");
  
  /* Tornando o array ao contrário (de trás pra frente). */
  
  arrayOfNewString.reverse();
  
  /* Atribuindo o array invertido à nova string criada anteriormente. */
  
  newString = arrayOfNewString.join("");
  
  /* Verificando se as duas strings (string e newString) são iguais, se forem,
     isso significa que o reverso de uma é igual ao normal da outra, ou seja: UM        PALÍNDROMO */
  
  if (string == newString) {
    return true;
  } else {
    return false;
  }
  
}
palindrome("eye");


/***************************************************************************************************************/
/* A function that return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays, but works perfectly with more. */
function largestOfFour(arr) {
  
  // Variáveis auxiliares.
  var maior = 1;
  var novoArr = [];
  
  // Iterando sobre cada elemento do array. 
  for (var i=0; i<arr.length; i++) {
    // Iterando sobre cada elemento do sub array.
    for (var j=0; j<arr[i].length; j++) {
      // Caso encontrado alguma posição que seja maior que
      // o anterior, a variavel 'maior' a recebe, ficando assim
      // somente com o maior numero do sub array.
      if ((arr[i][j]) > maior ) {
        maior = arr[i][j];
      }
    }
    // Assim que o atual sub array for iterado e achado o maior numero
    // ao sair para o proximo sub array há a
    // inserção do maior numero de cada sub array em um novo array
    // formando um array dos maiores numeros de cada sub array.
    // Zera-se a varíavel 'maior' para que nao carregue para o próximo sub array
    // o maior numero encontrado no sub array anterior.
    novoArr.push(maior);
    maior = 0;
  }
  
  return novoArr;
  
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/***************************************************************************************************************/
// A function that return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  
  // dividindo palavras da sentença no array
  var arrayOfWords = str.split(" ");

  //variável verificadora 
  var maior = 0;
  
  for (var i=0; i<arrayOfWords.length; i++ ) {
    // setando posições do array com o tamanho de cada palavra
    arrayOfWords[i] = arrayOfWords[i].length;
    
    /* verificando qual é o maior numero do array 
       ou seja, qual a maior palavra */
    if (arrayOfWords[i] > maior) {
      maior = arrayOfWords[i];
    }
    
  }
  
  return maior;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


/***************************************************************************************************************/
/* A function that check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge I use the JavaScript substring methods instead:
				String.prototype.substr()
        String.prototype.substring() */
function confirmEnding(str, target) {

  // Primeiramente checo se a ultima letra da segunda string passada pelo segundo parametro
  // é igual (str.substr(-1) == target) à ultima letra da primeira string passada pelo primeiro parametro.
                    // Se caso a primeira validação falhar, checo se a string passada como segundo parametro
                    // é igual ao final da primeira string passada como primeiro parametro.
  if (str.substr(-1) == target || str.substring(str.length - target.length) == target) {
    return true;
  } else {
    return false;
  }
  
}
confirmEnding("Bastian", "an");


/***************************************************************************************************************/
/* A function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
Ex: chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
return => [[0, 1], [2, 3], [4, 5]] */
function chunkArrayInGroups(arr, size) {
  
  // Declarando variaveis auxiliares e atribuindo um array recem criado
  // ao array passado por parametro
  var arrAux = arr;
  var arrAux2 = [];

  // No inicio do loop arrAux.length = 6
  while(arrAux.length) {

  	// Porem conforme adiciono as posições do array -
  	// que vai de 0 à size (2) ao array vazio 'arrAux2'-
  	// tais posições do array tratado com splice são destruidas,
  	// por isso há o tratamento com copias dos arrays ao inves deles próprios.
  	
  	// O que vai diminuindo o length do array 'arrAux' usado como controle do loop,
  	// caso contrário o loop seria infinito

    arrAux2.push(arrAux.splice(0,size));
}
  
    return arrAux2;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);


/***************************************************************************************************************/
/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
This function takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase and I do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */
function rot13(str) { 
  
  // Primeiramente divido a string passada como parametro em um array chamado 'arr'.
  var arr = str.split("");
  
  // Depois itero sob todas as posições do array (ou seja: da string).
  // A unica diferença é que nesse caso me pareceu melhor cuidar da frase
  // como array do que string. (feito em 06/01/2017)
  for (var i=0; i<arr.length; i++) { 
    
    // Como n quero criptografar non-alphabetic character primeiro valido se 
    // há algum character que nao seja uma letra de A-Z.
    if (arr[i].charCodeAt(0) < 65 || arr[i].charCodeAt(0) > 90) {
      continue;
      
      // Como estou usando rot13 para transformar a string 
      // e como quero todas as frases passadas como parametro em upperCase, 
      // agora verifico se preciso somar 13, ou subtrair 13.      
    } else if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) < 78) {
      arr[i] = arr[i].charCodeAt(0);
      arr[i] += 13;
      arr[i] = String.fromCharCode(arr[i]);
    } else if (arr[i].charCodeAt(0) > 77 && arr[i].charCodeAt(0) <= 90) {
      arr[i] = arr[i].charCodeAt(0);
      arr[i] -= 13;
      arr[i] = String.fromCharCode(arr[i]);
      
    }
  }
  
  // Por ultimo volto novamente o array para uma string.
  str = arr.join("");
  
  return str;
}
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");


/***************************************************************************************************************/
/* The funtion will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. The function remove all elements from the initial array that are of the same value as these arguments. */
function destroyer(arr) {
  
  // Criando um array e atribuindo a ele todos os argumentos da função atual.
  var arrOfArguments = Array.from(arguments);
  
  // Removendo o primeiro item do array 'arrOfArguments', ou seja, 
  // removendo o array passado por parametro (arr) do array de argumentos.
  arrOfArguments.splice(0, 1);

  // Função usada no filtro.
  function test(value) {
    
    // Assim que a função for chamada, o fluxo entrará num loop
    // de tamanho dependente de quantos argumentos virem depois do array 'arr'. 
    for (var i=0; i<arrOfArguments.length; i++) {
      
      // Verificando se a posição atual de 'arr' for diferente da
      // posição atual dos argumentos que veem depois de 'arr'.
      if (value != arrOfArguments[i]) {
        continue;  
      } else {
        
        // Caso encontre algum item igual ao do array de argumentos, 
        // a função retornará falso, o que destruirá tal valor.
        return false;
      }
    }
    
    return true;
  }
  
  var arrAux = arr.filter(test);
     
  return arrAux;
}
destroyer(["tree", "hamburger", 53], "tree", 53);


/***************************************************************************************************************/
/* A function that return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */
function getIndexToIns(arr, num) {
  
  // Ordenando array usando uma função, pois o metodo sort()
  // não é muito preciso.
  arr.sort(function(a, b) {
             return a - b;
          });
  
  // Iterando sob os itens do array e verificando se a posição corrente do array
  // é menor que o numero passado como segundo parametro.
  // Se der false em alguma posição signifca que
  // tal posição é a posição correta para se inserir 'num'.
  // Se nao for encontrado nenhum numero menor, o loop acabará e logo depois haverá 
  // a inserção de 'num' no final do array, pois ali seria sua posição correta.
  for (var i=0; i<arr.length; i++) {
    if (arr[i] < num) {
      continue;  
    } else {
      arr.splice(i, 0, num);
      return arr.indexOf(num);
    }
  }
  
  // Como o programa quer que retorne o index e não o valor, é feito isso em ambas 
  // as suposições com o metodo indexOf().
  
  arr.push(num);
  return arr.indexOf(num);
}
getIndexToIns([5, 3, 20, 3], 5);

