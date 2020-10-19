alert(spinWords("Hey fellow warriors"));

function spinWords(str){
    let separator = ' ';
    let arraySTR = str.split(' ');
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
