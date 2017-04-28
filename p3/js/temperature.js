var report = function (celcius, fahrenheit) { 
    document.getElementById("result2").innerHTML = fahrenheit + "\xb0F = " + celcius.toFixed(2) + "\xb0C"; //report1 function used to output F=C
    
};
var report2 = function (celcius, fahrenheit) {
    document.getElementById("result").innerHTML = celcius + "\xb0C = " + fahrenheit.toFixed(2) + "\xb0F"; //report2 used to output C=F
    
};



document.getElementById("f-to-c").onclick = function () { //Faranheit to Celcius
    var f = document.getElementById("temperature2").value; //gets value of textbox and puts value in F
    if (f > -9999999) { //ensures correct input validation -- no text.  
        report((f - 32) / 1.8, f); //uses report 1 function with parameters f-32/1.8 (conversion function) as celcius and textbox as F 
    }
        else {
            document.getElementById("result2").innerHTML = "You must use numerical values"; //used for wrong input. 
        }
};
           
document.getElementById("c-to-f").onclick = function () { //Celcius to Faranheit
    var c = document.getElementById("temperature").value; //gets value of textbox and puts value in C
    if (c > -999999) { //ensures correct input validation, no text 
        report2(c, 1.8 * c + 32); //uses report 2 function with parameters f-32/1.8 (conversion function) as celcius and textbox as C
    }
    else {
        document.getElementById("result").innerHTML = "You must use numerical values"; //displays wrong input
    }
};

