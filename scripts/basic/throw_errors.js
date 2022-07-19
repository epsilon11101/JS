try {
    console.log("first message");
    doesntExist; //n this variable doesnt exists
    console.log("some code");
} catch (error) {
    console.log(`catch errror: ${error}`);
} finally {
    console.log("this always will executed");
 }

// CUSTOM MESSAGES
 try {
    // let num = 10;
    let num = 'a';
     //isNaN is a function that evaluate if the param is num
    if (isNaN(num)) {
         throw new Error("This kind of data isnt number!");
     }

    console.log(num * num);
 } catch (error) {
     console.log(error);
     alert("press ok when read the console log results");
 }
