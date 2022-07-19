
    const NAME = "AARON MIRANDA VICTORINO";
    console.log(`YOUR NAME IS ${NAME}`);
    const ARRAY = [1, 2, 3];
    console.log(`ARRAY VALUES: ${ARRAY}`);
    ARRAY[2] = "NEW VALUE";
    
    console.log(`NEW_ARRAY_VALUES: ${ARRAY}`);
    console.log('ERROR IF WE TRY TO CHANGE NAME VALUE CAUSE IS A PRIMITIVE VALUE :');
    console.log("Uncaught TypeError: Assignment to constant variable.at const.js:17");
    alert("press ok when read the console log results");
   
    NAME = "NEW NAME";
    

