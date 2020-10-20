alert(spinWords("Add_your_line_here"));

function spinWords(str){
    const separator = ' ';
    let arraySTR = str.split(separator);
    let i = 0;
    for (let word of arraySTR){
        console.log(arraySTR);
      if (word.length >= 5){
        
        let revers = word.split("");
        let reversArray = revers.reverse();
        word = reversArray.join("");
        arraySTR[i] = word;
      } 
      i++; 
    }  
    str = arraySTR.join(" ");
    return str;
  }

/*
  High-level solution:


  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  */