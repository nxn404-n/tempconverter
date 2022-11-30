document.getElementById("sButton").onclick = function(){
    let temp;

    if(document.getElementById("cChk").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("output").innerHTML = "Ans: " + temp + "°C"
    }
    else if(document.getElementById("fChk").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("output").innerHTML = "Ans: " + temp + "°F"
    }
    else{
        document.getElementById("output").innerHTML = "Select a value please!!"
    }
}




function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}