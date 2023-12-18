function calculateTemp() {
    var temp = parseFloat(document.getElementById("temp").value);
    var temp_diff = document.getElementById("temp_diff").value;
    var resultcontainer = document.getElementById("resultcontainer");

    if (temp_diff === "cel") {
        var result = (temp * 9 / 5) + 32;
        resultcontainer.innerHTML = temp + "°C = " + result.toFixed(2) + "°F";
    } else if (temp_diff === "fah") {
        var result = (temp - 32) * 5 / 9;
        resultcontainer.innerHTML = temp + "°F = " + result.toFixed(2) + "°C";
    }
}

  