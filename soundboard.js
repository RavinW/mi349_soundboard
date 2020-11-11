/* creates variable then Finds the Button id element & links them */ 
let playChing = document.getElementById("Bell"); 

 /*Calls the button variable with onclick element then calls on function to link audio*/
playChing.onclick = function() {

/* variable Finds the Audio id element & links it to the button click */ 
    let bell = document.getElementById("bell") 
    
/*Plays the bell audio*/
    bell.play();

 /*Phantom message in the javacript console to let me know the buttons been clicked*/
    console.log("Bell button clicked!")
};

/*Play the Coughing audio*/
let playCough = document.getElementById("cough");/*Button id element in html*/

playCough.onclick = function() {
    let cough = document.getElementById("Coughing") /*Audio id element in html*/
    cough.play();
    console.log("Bell button clicked!")
};



/*Play the Thunder audio*/
let playThunder= document.getElementById("Thunder"); /*Button id element in html*/

playThunder.onclick = function() {
    let thunder = document.getElementById("thunder") /*Audio id element in html*/
    thunder.play();
    console.log("Bell button clicked!")
};

 /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */  /* */ 