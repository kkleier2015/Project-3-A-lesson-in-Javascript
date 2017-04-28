var report = function (kilo, lb) {
    document.getElementById("result").innerHTML = kilo + "kg = " + lb.toFixed(4) + " lbs"; //function to report kilo = lb
    
};
var report2 = function (lb, kilo) {
    document.getElementById("result2").innerHTML = lb + "lbs = " + kilo.toFixed(4) + "kg"; //function to report lb = kilo
    
};
document.getElementById("k-to-lb").onclick = function () { //gets value from box for kilo to be converted to lb
    var k = document.getElementById("weight").value; //takes value from box to be used for kilo
    if (k > 0) { //weight must be above 0 to compute
        report(k, k * 2.2046226218); //report function with value from box for kilo and conversion for lb for lb
    } else {
        document.getElementById("result").innerHTML = "Must be a value above 0"; //for input validation
    }
    
};
           
document.getElementById("lb-to-k").onclick = function () {
    var l = document.getElementById("weight2").value; //takes value from box 
    if (l > 0) { //weight must be above 0 
        report2(l, l / 2.2046226218); //report function 2 with l for lb, and conversion for kilo
    } else {
        document.getElementById("result2").innerHTML = "Must be a value above 0"; //display input validation
    }
};

