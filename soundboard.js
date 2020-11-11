  /* creates a variable, then Finds the id function of a button */ 
var bellElement = document.getElementById('bell')
var coughElement = document.getElementById('coughing')
var thunderElement = document.getElementById('thunder')


  /*Plays the bell audio*/
    function playBell(){

        bellElement.play();
        console.log("Bell sound clicked")
        
    }


/*Plays the coughing audio*/
    function playCough(){
        coughElement.play();
        console.log("Cough sound clicked")
    }



/*Plays the thunder audio*/ 
    function playThunder(){
        thunderElement.play();
        console.log("Thunder sound clicked")
    } 







 
/* Listens to see if the user clicked the button.
        Add event listener requires: the name of the event to listen for & The callback function, 
        which JavaScript looks back to and calls whenever that event happensThe call back function*/ 

  /* Plays the bell audio 
  bellElement.addEventListener('click', function () {  
        bellElement.play()*/
        
/*The callback function, which confirms that our event listener really is working, by printing 
I was clicked! whenever we click on the button. 
        
        console.log('Bell Button was clicked!')
        
     })*/ 


 /*Plays the coughing audio
    coughElement.addEventListener('click', function () {
        coughElementtwo.play()
        console.log('Cough Button was clicked!')
    })*/
 
 
 /*Plays the thunder audio
    thunderElement.addEventListener('click', function () {
        thunderElement.play()
        console.log('Thunder Button was clicked!')
    })*/
    
  
 /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */ 