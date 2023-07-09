
function writeCards(names, event) {
    
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
      
      let name = names[i];
      
      let message = `Thank you, ${name}, for the wonderful ${event} gift!`;
      
      messages.push(message);
    }
    
    return messages;
  }

  function countDown(number){
    while (number >= 0) {
        console.log(number);
        number--; 
    }
  }