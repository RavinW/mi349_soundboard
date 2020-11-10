  /* creates a variable, then Finds the id function of a button */ 
var bellElement = document.getElementById('bell')
var coughElement = document.getElementById('coughing')
var thunderElement = document.getElementById('thunder')
 
/* Listens to see if the user clicked the button.
        Add event listener requires: the name of the event to listen for & The callback function, 
        which JavaScript looks back to and calls whenever that event happensThe call back function*/ 

    bellElement.addEventListener('click', function () {

/*The callback function, which confirms that our event listener really is working, by printing 
I was clicked! whenever we click on the button. */ 

    console.log('Bell Button was clicked!')
  })

  coughElement.addEventListener('click', function () {
    console.log('Cough Button was clicked!')
    })

    thunderElement.addEventListener('click', function () {
        console.log('Thunder Button was clicked!')
    })
    

        





 /*Plays the bell audio*/
  function playBell(){
      bellElement.play()

  }
  /*Plays the coughing audio*/
  function playCough(){
    coughElementtwo.play()

}

  /*Plays the thunder audio*/
  function playThunder(){
    thunderElement.play()

}
  

  /* */ 












 /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */ 