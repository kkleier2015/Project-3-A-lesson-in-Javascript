var report = function (usd, eu) {
    document.getElementById("result").innerHTML = "$ " + usd + " = " + eu.toFixed(2) + "Euros"; // report function for usd-to-eu
    
};

var report2 = function (eu, usd) {
    document.getElementById("result2").innerHTML = eu + " Euros =" + "$" + usd.toFixed(2); //report function for eu-to-usd
    
};

document.getElementById("eu-usd").onclick = function () { //function to convert eu to usd
    var e = document.getElementById("currency2").value; //get value from box
    if (e >= 0) //if value above 0, 
        {
            report2(e, e * 0.94); //euros are 94 cents to the dollar
             
        }
    else{
         document.getElementById("result2").innerHTML = "Invalid amount. Enter a non-negative Value"; //input validation
    }
   
};
           
document.getElementById("usd-eu").onclick = function () { //function for usd to eu
    
    var d = document.getElementById("currency").value; //get value from box
    if (d >= 0) { //make sure value is above 0
            
        report(d, d * 1.06); //one euro is 1.06 dollars  (Convert)   
        }
    else {
         document.getElementById("result").innerHTML = "Invalid amount. Enter a non-negative Value"; //input validation
    }
    
};

